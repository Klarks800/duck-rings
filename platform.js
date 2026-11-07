/* Duck Rings: VK Mini Apps (VK/OK) and the standalone OK games container.
 * No application secret, access token, telemetry or third-party ad network.
 */
(function (w) {
  'use strict';
  const KEY='duck_rings_profile_v1', META=KEY+'_meta', MAX_PARTS=32;
  const params=new URLSearchParams(w.location.search);
  let provider='local', platform='local', bridge, profile='', ready=false;
  let hidden=!!w.document.hidden, platformHidden=false, pendingAd=null, adsTimedOut=false;
  let journal=null, storageId='', slot='b', revision=0, saving=false, saveTimer;
  let cloud=true, lastSaveError='';
  let bannersStarted=false,bannerVisible=false,bannerClosed=false,bannerSearching=false,bannerRetry;
  let bannerQueue=Promise.resolve(),bannerHeight=0;
  let adsAvailableAt=0;
  const adCounters={rewardAttempts:0,interstitialAttempts:0,rewardSdkRequests:0,interstitialSdkRequests:0,
    rewardSdkCompletions:0,interstitialSdkCompletions:0,bannerSdkRequests:0,bannerSdkSuccesses:0};
  let lastAdError=null,lastAdBlock=null,adWarnings=0;
  function adError(method,reason,error) {
    const rawCode=error?.error_data?.error_code??error?.code;
    const code=/^-?\d{1,8}$/.test(String(rawCode))?Number(rawCode):null;
    // Never retain launch URLs, account IDs, signatures or arbitrary SDK messages.
    lastAdError={method,reason,code};
    if(adWarnings++<10&&typeof console!=='undefined'&&console.warn)
      console.warn('[DuckRings ads]',JSON.stringify(lastAdError));
  }
  function adBlockReason(){
    if(!ready)return 'not_initialized';
    if(provider==='local')return params.has('api_id')||params.has('viewer_id')?'legacy_vk_launch_not_supported':'no_platform_parameters';
    if(Date.now()<adsAvailableAt)return 'first_30_seconds';
    if(hidden||platformHidden)return 'app_hidden';
    if(pendingAd)return 'another_ad_pending';
    if(adsTimedOut)return 'fapi_reload_required_after_timeout';
    return '';
  }
  let adPanel=null;
  function closeAdPanel(){if(adPanel){adPanel.remove();adPanel=null;}}
  function openAdPanel(){
    if(adPanel){closeAdPanel();return;}
    const overlay=w.document.createElement('div');
    overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','Диагностика рекламы');
    Object.assign(overlay.style,{position:'fixed',inset:'0 0 var(--platform-banner-height,0px) 0',zIndex:'2147483647',background:'#101827e8',display:'flex',alignItems:'center',justifyContent:'center',padding:'16px'});
    const box=w.document.createElement('section');
    Object.assign(box.style,{display:'flex',flexDirection:'column',width:'min(760px,100%)',maxHeight:'100%',overflow:'hidden',background:'#fff',color:'#17212b',borderRadius:'12px',padding:'20px',font:'15px system-ui',userSelect:'text'});
    const title=w.document.createElement('h2');title.textContent='Диагностика рекламы';
    const note=w.document.createElement('p');note.textContent='Проверка текущего запуска. Подтверждения SDK не означают подтверждённый доход. F2 или Esc — закрыть.';
    const text=w.document.createElement('textarea');text.readOnly=true;text.setAttribute('aria-label','Состояние рекламного SDK');
    Object.assign(title.style,{margin:'0 0 10px',flexShrink:'0'});Object.assign(note.style,{margin:'0 0 10px',flexShrink:'0',fontSize:'13px'});
    Object.assign(text.style,{width:'100%',height:'min(40vh,300px)',minHeight:'80px',flex:'1 1 auto',resize:'none',font:'13px monospace',userSelect:'text'});
    const select=w.document.createElement('button');select.textContent='Выделить результат';select.onclick=()=>{text.focus();text.select();};
    const close=w.document.createElement('button');close.textContent='Закрыть';close.onclick=closeAdPanel;
    for(const button of [select,close])Object.assign(button.style,{padding:'10px 14px',margin:'8px 8px 0 0',cursor:'pointer'});
    const controls=w.document.createElement('div');controls.style.flexShrink='0';controls.append(select,close);
    box.append(title,note,text,controls);overlay.append(box);w.document.body.append(overlay);adPanel=overlay;
    function update(){
      if(adPanel!==overlay)return;
      const s=w.DuckRingsPlatform.adStatus;
      const reasons={not_initialized:'Инициализация не завершена',no_platform_parameters:'Нет параметров запуска ВК/ОК: реклама отключена',
        legacy_vk_launch_not_supported:'Получены старые параметры ВК api_id/viewer_id: этот контейнер ещё не подключён',
        first_30_seconds:'Первые 30 секунд',app_hidden:'Приложение скрыто',another_ad_pending:'Ожидается ответ на другой рекламный запрос',
        fapi_reload_required_after_timeout:'После тайм-аута FAPI нужна перезагрузка'};
      const c=s.counters;
      text.value='Версия: '+s.version+'\nПлощадка: '+s.platform+'\nАдаптер: '+s.provider+
        '\nИнициализация: '+(s.ready?'завершена':'не завершена')+'\nЗапрет показа: '+(reasons[s.blockReason]||'нет')+
        '\nОжидание старта: '+s.warmupSecondsRemaining+' сек.\nБаннер: '+(s.bannerVisible?'показ подтверждён SDK':'не показан')+
        '\nБаннер — запросы SDK / подтверждения: '+c.bannerSdkRequests+' / '+c.bannerSdkSuccesses+
        '\nНаграда — нажатия / запросы SDK / завершения: '+c.rewardAttempts+' / '+c.rewardSdkRequests+' / '+c.rewardSdkCompletions+
        '\nМежстраничная — попытки / запросы SDK / завершения: '+c.interstitialAttempts+' / '+c.interstitialSdkRequests+' / '+c.interstitialSdkCompletions+
        '\nПоследний отказ SDK: '+(s.lastError?JSON.stringify(s.lastError):'не зафиксирован')+
        '\nПоследняя блокировка: '+(s.lastBlock?JSON.stringify(s.lastBlock):'не зафиксирована')+
        '\n\nСчётчики только за текущий запуск. Доход в кабинете этой панелью не проверяется.';
      w.setTimeout(update,1000);
    }
    update();close.focus();
  }
  w.addEventListener('keydown',event=>{
    if((event.code==='F2'||event.key==='F2')&&!event.repeat){event.preventDefault();event.stopPropagation();openAdPanel();}
    else if(adPanel&&event.key==='Escape'){event.preventDefault();event.stopPropagation();closeAdPanel();}
  },true);
  function adsAllowed(){return ready&&Date.now()>=adsAvailableAt&&!hidden&&!platformHidden;}
  function wantBanner(){return bannersStarted&&adsAllowed()&&provider!=='local'&&!pendingAd&&!bannerClosed;}
  function bannerSpace(height) {
    bannerHeight=Math.max(0,Math.min(Number(height)||0,(Number(w.innerHeight)||720)*.4));
    w.document.documentElement.style.setProperty('--platform-banner-height',bannerHeight+'px');
  }
  function retryBanner() {
    w.clearTimeout(bannerRetry);
    if(wantBanner()&&!bannerVisible)bannerRetry=w.setTimeout(syncBanner,60000);
  }
  function syncBanner() {
    // Serialize SDK calls: a slow show response must be followed by a hide if
    // the app became hidden or a full-screen ad started in the meantime.
    bannerQueue=bannerQueue.then(async()=>{
      if(provider==='local')return;
      const wanted=wantBanner();
      if(provider==='bridge') {
        if(wanted===bannerVisible)return;
        try {
          if(wanted)adCounters.bannerSdkRequests++;
          const result=await timeout(bridge.send(wanted?'VKWebAppShowBannerAd':'VKWebAppHideBannerAd',wanted?{banner_location:'bottom',layout_type:'overlay',can_close:true}:{}),10000);
          if(result?.result===true) {
            bannerVisible=wanted;
            if(wanted)adCounters.bannerSdkSuccesses++;
            // With resize, the host already reduced the iframe; avoid double padding.
            bannerSpace(wanted&&result.layout_type!=='resize'?(result.banner_height||96):0);
          } else adError(wanted?'VKWebAppShowBannerAd':'VKWebAppHideBannerAd','sdk_did_not_confirm');
        }catch(error){adError(wanted?'VKWebAppShowBannerAd':'VKWebAppHideBannerAd','sdk_rejected',error);}
      } else if(wanted&&!bannerVisible&&!bannerSearching) {
        bannerSearching=true;
        try{adCounters.bannerSdkRequests++;w.FAPI.invokeUIMethod('requestBannerAds');}catch(error){bannerSearching=false;adError('requestBannerAds','sdk_rejected',error);}
      } else if(!wanted&&(bannerVisible||bannerSearching)) {
        try{w.FAPI.invokeUIMethod('hideBannerAds');}catch(_){}
        bannerSearching=false;bannerVisible=false;bannerSpace(0);
      }
      retryBanner();
    }).catch(()=>{});
    return bannerQueue;
  }
  function startBanners(){
    bannersStarted=true;
    if(ready&&Date.now()<adsAvailableAt){
      w.clearTimeout(bannerRetry);bannerRetry=w.setTimeout(syncBanner,adsAvailableAt-Date.now());
    }
    return syncBanner();
  }
  function okBanner(method,result,data) {
    if(method==='requestBannerAds') {
      if(result==='ok'&&data==='ad_loaded') {
        if(wantBanner())w.FAPI.invokeUIMethod('showBannerAds','bottom');else syncBanner();
      } else if(result==='ok'&&(data==='banner_shown'||data==='ad_shown')) {
        bannerVisible=true;bannerSpace(w.innerWidth<600?106:96);if(!wantBanner())syncBanner();
      } else if(data==='hidden_by_user') {
        bannerClosed=true;bannerVisible=false;bannerSpace(0);syncBanner();
      } else if(result==='error') {bannerSearching=false;adError(method,'sdk_rejected');if(data==='disabled'||data==='not_supported')bannerClosed=true;retryBanner();}
    } else if(method==='showBannerAds'&&result==='ok'&&String(data)==='true') {
      bannerVisible=true;adCounters.bannerSdkSuccesses++;bannerSpace(w.innerWidth<600?106:96);if(!wantBanner())syncBanner();
    } else if(method==='hideBannerAds'&&result==='ok'&&String(data)==='true') {
      bannerVisible=false;bannerSpace(0);
    } else if(method==='showBannerAds') {
      bannerVisible=false;bannerSearching=false;bannerSpace(0);retryBanner();
    }
  }
  const timeout=(promise,ms)=>new Promise((resolve,reject)=>{
    const timer=w.setTimeout(()=>reject(new Error('Platform request timed out')),ms);
    Promise.resolve(promise).then(v=>{w.clearTimeout(timer);resolve(v);},e=>{w.clearTimeout(timer);reject(e);});
  });
  function script(url) {
    return timeout(new Promise((resolve,reject)=>{
      const tag=w.document.createElement('script');tag.src=url;tag.onload=resolve;
      tag.onerror=()=>reject(new Error('Could not load the platform SDK'));
      w.document.head.appendChild(tag);
    }),15000);
  }
  function hash(value) {
    let result=2166136261;
    for(let i=0;i<value.length;i++)result=Math.imul(result^value.charCodeAt(i),16777619);
    return (result>>>0).toString(16);
  }
  function split(value) {
    const result=[];let part='',size=0;
    for(const char of value) {
      const n=new TextEncoder().encode(char).length;
      if(size+n>2000){result.push(part);part='';size=0;}
      part+=char;size+=n;
    }
    if(part)result.push(part);
    if(result.length>MAX_PARTS)throw new Error('Profile exceeds platform storage budget');
    return result;
  }
  function localRead(){try{return JSON.parse(w.localStorage.getItem(storageId)||'null');}catch(_){return null;}}
  function localWrite(){try{w.localStorage.setItem(storageId,JSON.stringify(journal));}catch(_){lastSaveError='Local backup unavailable';}}
  function validData(data) {
    if(typeof data!=='string'||!data)return false;
    try {const p=JSON.parse(data);return p&&Number.isInteger(p.nextLevel)&&p.nextLevel>=1&&Array.isArray(p.inventory);}catch(_){return false;}
  }
  function okCall(args) {
    return timeout(new Promise((resolve,reject)=>w.FAPI.Client.call(args,(status,data,error)=>{
      if(status==='ok')resolve(data);else reject(new Error(error?'OK storage request failed':'OK storage unavailable'));
    })),15000);
  }
  async function get(keys) {
    if(provider==='bridge') {
      const data=await timeout(bridge.send('VKWebAppStorageGet',{keys}),15000);
      if(!data||!Array.isArray(data.keys))throw new Error('Invalid platform storage response');
      return Object.fromEntries(data.keys.map(row=>[row.key,row.value]));
    }
    const data=await okCall({method:'storage.get',keys:keys.join(','),scope:'CUSTOM'});
    if(!data?.data||typeof data.data!=='object')throw new Error('Invalid OK storage response');
    return data.data;
  }
  async function set(key,value) {
    if(provider==='bridge') {
      const result=await timeout(bridge.send('VKWebAppStorageSet',{key,value}),15000);
      if(result?.result!==true)throw new Error('Platform did not confirm the save');
    } else {
      const result=await okCall({method:'storage.set',key,value,scope:'CUSTOM'});
      if(result?.success!==true)throw new Error('OK did not confirm the save');
    }
  }
  async function loadCloud() {
    const values=await get([META]);
    if(!values[META])return null;
    const meta=JSON.parse(values[META]);
    if(meta.version!==1||!['a','b'].includes(meta.slot)||!Number.isInteger(meta.count)||meta.count<1||meta.count>MAX_PARTS)
      throw new Error('Invalid saved profile manifest');
    const keys=Array.from({length:meta.count},(_,i)=>KEY+'_'+meta.slot+'_'+i);
    const parts=await get(keys),data=keys.map(key=>parts[key]||'').join('');
    if(hash(data)!==meta.checksum||!validData(data))throw new Error('Saved profile is incomplete');
    slot=meta.slot;revision=meta.revision||0;
    return {data,updatedAt:meta.updatedAt||0,pending:false};
  }
  async function flush() {
    if(saving||!ready||!journal?.pending||provider==='local'||!cloud)return;
    saving=true;
    const current=journal;
    try {
      const parts=split(current.data),next=slot==='a'?'b':'a';
      for(let i=0;i<parts.length;i++)await set(KEY+'_'+next+'_'+i,parts[i]);
      await set(META,JSON.stringify({version:1,slot:next,count:parts.length,revision:revision+1,updatedAt:current.updatedAt,checksum:hash(current.data)}));
      slot=next;revision++;lastSaveError='';
      if(journal===current){journal.pending=false;localWrite();}
    } catch(_) {lastSaveError='Cloud save pending; local backup retained';}
    finally {
      saving=false;
      if(journal?.pending)saveTimer=w.setTimeout(flush,lastSaveError?15000:1000);
    }
  }
  function save(value) {
    if(!ready||!validData(value))return;
    profile=value;journal={data:value,updatedAt:Math.max(Date.now(),(journal?.updatedAt||0)+1),pending:provider!=='local'};
    localWrite();w.clearTimeout(saveTimer);saveTimer=w.setTimeout(flush,1000);
  }
  function insets(data) {
    if(!data?.insets)return;
    for(const side of ['top','right','bottom','left']) {
      const value=Number(data.insets[side]);
      if(Number.isFinite(value))w.document.documentElement.style.setProperty('--platform-inset-'+side,Math.max(0,value)+'px');
    }
  }
  function finishAd(success,request=pendingAd) {
    if(!pendingAd||pendingAd!==request)return;
    if(success===true)adCounters[pendingAd.rewarded?'rewardSdkCompletions':'interstitialSdkCompletions']++;
    const pending=pendingAd;pendingAd=null;w.clearTimeout(pending.timer);pending.resolve(success===true);syncBanner();
  }
  function okCallback(method,result,data) {
    okBanner(method,result,data);
    if(!pendingAd)return;
    if(pendingAd.rewarded) {
      if(method==='loadAd'&&pendingAd.phase==='loading') {
        if(result==='ok'&&(data==='ready'||data==='ad_prepared')){
          if(!adsAllowed()){finishAd(false);return;}
          pendingAd.phase='showing';
          try{w.FAPI.UI.showLoadedAd();}catch(error){adError('showLoadedAd','sdk_rejected',error);finishAd(false);}
        }
        else if(result==='error'){adError(method,'sdk_rejected');finishAd(false);}
      } else if(method==='showLoadedAd'&&pendingAd.phase==='showing') {
        if(result==='ok'&&(data==='complete'||data==='ad_shown'))finishAd(true);
        else if(result==='error'){adError(method,'sdk_rejected');finishAd(false);}
      }
    } else if(method==='showAd') {
      if(result==='ok'&&data==='ad_shown')finishAd(true);
      else if(result==='error'){adError(method,'sdk_rejected');finishAd(false);}
    }
  }
  async function showAd(rewarded) {
    adCounters[rewarded?'rewardAttempts':'interstitialAttempts']++;
    const blocked=adBlockReason();
    if(blocked){lastAdBlock={format:rewarded?'reward':'interstitial',reason:blocked};return false;}
    lastAdBlock=null;
    return new Promise(resolve=>{
      pendingAd={rewarded,resolve,phase:rewarded?'loading':'showing',timer:w.setTimeout(()=>{
        // FAPI has no request IDs; never let a late callback reward a later request.
        if(pendingAd!==request)return;
        adsTimedOut=provider==='fapi';adError(rewarded?'reward':'interstitial','sdk_timeout');finishAd(false,request);
      },180000)};
      const request=pendingAd;
      const run=()=>{if(pendingAd!==request)return;if(!adsAllowed()){finishAd(false,request);return;}try {
        if(provider==='bridge') {
          adCounters[rewarded?'rewardSdkRequests':'interstitialSdkRequests']++;
          bridge.send('VKWebAppShowNativeAds',{ad_format:rewarded?'reward':'interstitial'})
            .then(data=>{if(pendingAd!==request)return;if(data?.result!==true)adError('VKWebAppShowNativeAds','sdk_did_not_confirm');finishAd(data?.result===true,request);},
              error=>{if(pendingAd!==request)return;adError('VKWebAppShowNativeAds','sdk_rejected',error);finishAd(false,request);});
        } else {
          adCounters[rewarded?'rewardSdkRequests':'interstitialSdkRequests']++;
          if(rewarded)w.FAPI.UI.loadAd();else w.FAPI.UI.showAd();
        }
      } catch(error){adError('showAd','sdk_rejected',error);finishAd(false,request);}};
      if(bannersStarted)syncBanner().then(run);else run();
    });
  }
  async function init() {
    if(ready)return;
    // VK-distributed OK mini apps use VK Bridge, not the legacy FAPI container.
    const mini=params.has('vk_app_id')||params.has('vk_platform');
    const legacyOK=!mini&&params.has('api_server')&&params.has('apiconnection');
    if(mini) {
      platform=params.has('vk_ok_app_id')||params.get('vk_client')==='ok'?'ok':'vk';provider='bridge';
      if(!w.vkBridge)await script('vendor/vk-bridge-2.15.0.min.js');
      bridge=w.vkBridge;
      bridge.subscribe(event=>{
        const detail=event.detail||{};
        if(detail.type==='VKWebAppViewHide'){platformHidden=true;syncBanner();}
        if(detail.type==='VKWebAppViewRestore'){platformHidden=false;syncBanner();}
        if(detail.type==='VKWebAppBannerAdUpdated') {
          if(detail.data?.result===true){bannerVisible=true;bannerSpace(detail.data.layout_type==='resize'?0:detail.data.banner_height);if(!wantBanner())syncBanner();}
          else {bannerVisible=false;bannerSpace(0);retryBanner();}
        }
        if(detail.type==='VKWebAppBannerAdClosedByUser'){bannerClosed=true;bannerVisible=false;bannerSpace(0);}
        if(detail.type==='VKWebAppUpdateConfig'||detail.type==='VKWebAppUpdateInsets')insets(detail.data);
      });
      await timeout(bridge.send('VKWebAppInit'),15000);
      storageId='duck-rings:'+platform+':'+(params.get('vk_app_id')||'54861116')+':'+(params.get('vk_ok_user_id')||params.get('vk_user_id')||'guest');
    } else if(legacyOK) {
      platform='ok';provider='fapi';
      if(!w.FAPI)await script('https://api.ok.ru/js/fapi5.js');
      await timeout(new Promise((resolve,reject)=>w.FAPI.init(params.get('api_server'),params.get('apiconnection'),resolve,()=>reject(new Error('OK initialization failed')))),15000);
      storageId='duck-rings:ok:'+(params.get('application_key')||'512005202512')+':'+(params.get('logged_user_id')||'guest');
      const previous=w.API_callback;
      w.API_callback=function(method,result,data){okCallback(method,result,data);if(typeof previous==='function')previous(method,result,data);};
    } else {storageId='duck-rings:local:v1';cloud=false;}
    journal=localRead();
    if(journal&&!validData(journal.data))journal=null;
    if(provider!=='local') {
      // A failed initial read blocks launch rather than saving a fresh profile over
      // an existing cloud profile. Retry is offered by the loading screen.
      const remote=await loadCloud();
      if(remote&&(!journal?.pending||remote.updatedAt>=journal.updatedAt))journal=remote;
    }
    // Apply the platform's first-install safety interval on every launch too.
    // A reload must never cause an early automatic banner or full-screen ad.
    profile=journal?.data||'';adsAvailableAt=Date.now()+30000;ready=true;
    if(journal)localWrite();
    if(journal?.pending)saveTimer=w.setTimeout(flush,1000);
  }
  w.document.addEventListener('visibilitychange',()=>{hidden=!!w.document.hidden;if(hidden)flush();syncBanner();});
  w.addEventListener('resize',()=>{if(provider==='fapi'&&bannerVisible)bannerSpace(w.innerWidth<600?106:96);});
  w.addEventListener('pagehide',()=>{if(journal)localWrite();});
  w.addEventListener('online',flush);
  w.DuckRingsPlatform=Object.freeze({init,save,showAd,flush,startBanners,
    get ready(){return ready;},get hidden(){return hidden||platformHidden;},
    get profile(){return profile;},get platform(){return platform;},get provider(){return provider;},
    get adStatus(){return {version:'2026-11-08.1',provider,platform,ready,
      blockReason:adBlockReason(),warmupSecondsRemaining:Math.max(0,Math.ceil((adsAvailableAt-Date.now())/1000)),
      bannersStarted,bannerVisible,bannerClosed,adPending:!!pendingAd,counters:{...adCounters},
      lastError:lastAdError?{...lastAdError}:null,lastBlock:lastAdBlock?{...lastAdBlock}:null,
      revenueVerified:false};},
    get saveStatus(){return {pending:!!journal?.pending,error:lastSaveError};},
    get bannerStatus(){return {visible:bannerVisible,height:bannerHeight,closed:bannerClosed};}
  });
})(window);
