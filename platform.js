/* Duck Rings: VK Mini Apps (VK/OK) and the standalone OK games container.
 * No application secret, access token, telemetry or third-party ad network.
 */
(function (w) {
  'use strict';
  const RUSSIAN_GENERATED_NAMES={"James":"Александр","Mary":"Мария","John":"Дмитрий","Jennifer":"Анна","Michael":"Сергей","Emily":"Екатерина","William":"Андрей","Sarah":"Ольга","David":"Алексей","Jessica":"Наталья","Robert":"Иван","Linda":"Татьяна","Joseph":"Николай","Karen":"Ирина","Charles":"Владимир","Susan":"Елена","Daniel":"Михаил","Patricia":"Юлия","Thomas":"Павел","Helen":"Светлана","Richard":"Евгений","Nancy":"Марина","Christopher":"Максим","Betty":"Анастасия","Matthew":"Виктор","Dorothy":"Любовь","Anthony":"Артём","Margaret":"Галина","Mark":"Игорь","Sandra":"Валентина","Steven":"Роман","Deborah":"Людмила","Andrew":"Олег","Laura":"Алёна","Paul":"Ярослав","Kimberly":"Ксения","Kenneth":"Борис","Rachel":"Нина","George":"Григорий","Shirley":"Зоя","Kevin":"Тимур","Ruth":"Вера","Brian":"Василий","Jacob":"Леонид","Christine":"Дарья","Edward":"Константин","Carol":"Жанна","Jonathan":"Никита","Lisa":"Алиса","Oliver":"Станислав","Evelyn":"Антон","Henry":"Вероника","Chloe":"Виктория","Theodore":"Егор","Zoe":"Диана","Caleb":"Вадим","Nora":"Лилия","Sebastian":"Тимофей","Luna":"Маргарита","Isaac":"Фёдор","Hazel":"Софья","Miles":"Кирилл","Ivy":"Алина","Leo":"Вячеслав","Aurora":"Люба","Asher":"Аркадий","Scarlett":"Снежана","Felix":"Пётр","Violet":"Валерий","SunnyDuck":"Александр К.","SunnyQuack":"Мария К.","SunnyFluff":"Дмитрий К.","SunnyWings":"Анна К.","SunnyFeather":"Сергей К.","SunnyPond":"Екатерина К.","SunnyBrook":"Андрей К.","SunnyRiver":"Ольга К.","SunnyReed":"Алексей К.","SunnyPebble":"Наталья К.","SunnyRipple":"Иван К.","SunnySplash":"Татьяна К.","SunnyDrift":"Николай К.","SunnyScout":"Ирина К.","SunnySailor":"Владимир К.","SunnySkipper":"Елена К.","SunnyStar":"Михаил К.","SunnySun":"Юлия К.","SunnyMoon":"Павел К.","SunnyCloud":"Светлана К.","SunnyBreeze":"Евгений К.","SunnyBuddy":"Марина К.","SunnyPaddle":"Максим К.","SunnyWave":"Анастасия К.","HappyDuck":"Виктор К.","HappyQuack":"Любовь К.","HappyFluff":"Артём К.","HappyWings":"Галина К.","HappyFeather":"Игорь К.","HappyPond":"Валентина К.","HappyBrook":"Роман К.","HappyRiver":"Людмила К.","HappyReed":"Олег К.","HappyPebble":"Алёна К.","HappyRipple":"Ярослав К.","HappySplash":"Ксения К.","HappyDrift":"Борис К.","HappyScout":"Нина К.","HappySailor":"Григорий К.","HappySkipper":"Зоя К.","HappyStar":"Тимур К.","HappySun":"Вера К.","HappyMoon":"Василий К.","HappyCloud":"Полина К.","HappyBreeze":"Леонид К.","HappyBuddy":"Дарья К.","HappyPaddle":"Константин К.","HappyWave":"Жанна К.","CleverDuck":"Никита К.","CleverQuack":"Алиса К.","CleverFluff":"Станислав К.","CleverWings":"Антон К.","CleverPond":"Вероника К.","CleverBrook":"Виктория К.","CleverRiver":"Егор К.","CleverReed":"Диана К.","CleverPebble":"Вадим К.","CleverRipple":"Лилия К.","CleverSplash":"Тимофей К.","CleverDrift":"Маргарита К.","CleverScout":"Фёдор К.","CleverSailor":"Софья К.","CleverStar":"Кирилл К.","CleverSun":"Алина К.","CleverMoon":"Вячеслав К.","CleverCloud":"Люба К.","CleverBreeze":"Аркадий К.","CleverBuddy":"Снежана К.","CleverPaddle":"Пётр К.","CleverWave":"Валерий К.","BraveDuck":"Александр М.","BraveQuack":"Мария М.","BraveFluff":"Дмитрий М.","BraveWings":"Анна М.","BraveFeather":"Сергей М.","BravePond":"Екатерина М.","BraveBrook":"Андрей М.","BraveRiver":"Ольга М.","BraveReed":"Алексей М.","BravePebble":"Наталья М.","BraveRipple":"Иван М.","BraveSplash":"Татьяна М.","BraveDrift":"Николай М.","BraveScout":"Ирина М.","BraveSailor":"Владимир М.","BraveSkipper":"Елена М.","BraveStar":"Михаил М.","BraveSun":"Юлия М.","BraveMoon":"Павел М.","BraveCloud":"Светлана М.","BraveBreeze":"Евгений М.","BraveBuddy":"Марина М.","BravePaddle":"Максим М.","BraveWave":"Анастасия М.","MerryDuck":"Виктор М.","MerryQuack":"Любовь М.","MerryFluff":"Артём М.","MerryWings":"Галина М.","MerryFeather":"Игорь М.","MerryPond":"Валентина М.","MerryBrook":"Роман М.","MerryRiver":"Людмила М.","MerryReed":"Олег М.","MerryPebble":"Алёна М.","MerryRipple":"Ярослав М.","MerrySplash":"Ксения М.","MerryDrift":"Борис М.","MerryScout":"Нина М.","MerrySailor":"Григорий М.","MerrySkipper":"Зоя М.","MerryStar":"Тимур М.","MerrySun":"Вера М.","MerryMoon":"Василий М.","MerryCloud":"Полина М.","MerryBreeze":"Леонид М.","MerryBuddy":"Дарья М.","MerryPaddle":"Константин М.","MerryWave":"Жанна М.","JollyDuck":"Никита М.","JollyQuack":"Алиса М.","JollyFluff":"Станислав М.","JollyWings":"Антон М.","JollyFeather":"Вероника М.","JollyPond":"Виктория М.","JollyBrook":"Егор М.","JollyRiver":"Диана М.","JollyReed":"Вадим М.","JollyPebble":"Лилия М.","JollyRipple":"Тимофей М.","JollySplash":"Маргарита М.","JollyDrift":"Фёдор М.","JollyScout":"Софья М.","JollySailor":"Кирилл М.","JollySkipper":"Алина М.","JollyStar":"Вячеслав М.","JollySun":"Люба М.","JollyMoon":"Аркадий М.","JollyCloud":"Снежана М.","JollyBreeze":"Пётр М.","JollyBuddy":"Валерий М.","JollyPaddle":"Александр С.","JollyWave":"Мария С.","LuckyDuck":"Дмитрий С.","LuckyQuack":"Анна С.","LuckyFluff":"Сергей С.","LuckyWings":"Екатерина С.","LuckyFeather":"Андрей С.","LuckyPond":"Ольга С.","LuckyBrook":"Алексей С.","LuckyRiver":"Наталья С.","LuckyReed":"Иван С.","LuckyPebble":"Татьяна С.","LuckyRipple":"Николай С.","LuckySplash":"Ирина С.","LuckyDrift":"Владимир С.","LuckyScout":"Елена С.","LuckySailor":"Михаил С.","LuckySkipper":"Юлия С.","LuckyStar":"Павел С.","LuckySun":"Светлана С.","LuckyMoon":"Евгений С.","LuckyCloud":"Марина С.","LuckyBreeze":"Максим С.","LuckyBuddy":"Анастасия С.","LuckyPaddle":"Виктор С.","LuckyWave":"Любовь С.","SwiftDuck":"Артём С.","SwiftQuack":"Галина С.","SwiftFluff":"Игорь С.","SwiftWings":"Валентина С.","SwiftFeather":"Роман С.","SwiftPond":"Людмила С.","SwiftBrook":"Олег С.","SwiftRiver":"Алёна С.","SwiftReed":"Ярослав С.","SwiftPebble":"Ксения С.","SwiftRipple":"Борис С.","SwiftSplash":"Нина С.","SwiftDrift":"Григорий С.","SwiftScout":"Зоя С.","SwiftSailor":"Тимур С.","SwiftSkipper":"Вера С.","SwiftStar":"Василий С.","SwiftSun":"Полина С.","SwiftMoon":"Леонид С.","SwiftCloud":"Дарья С.","SwiftBreeze":"Константин С.","SwiftBuddy":"Жанна С.","SwiftPaddle":"Никита С.","SwiftWave":"Алиса С.","GentleDuck":"Станислав С.","GentleQuack":"Антон С.","GentleFluff":"Вероника С.","GentleWings":"Виктория С.","GentlePond":"Егор С.","GentleBrook":"Диана С.","GentleRiver":"Вадим С.","GentleReed":"Лилия С.","GentlePebble":"Тимофей С.","GentleRipple":"Маргарита С.","GentleSplash":"Фёдор С.","GentleDrift":"Софья С.","GentleScout":"Кирилл С.","GentleSailor":"Алина С.","GentleStar":"Вячеслав С.","GentleSun":"Люба С.","GentleMoon":"Аркадий С.","GentleCloud":"Снежана С.","GentleBreeze":"Пётр С.","GentleBuddy":"Валерий С.","GentlePaddle":"Александр А.","GentleWave":"Мария А.","BrightDuck":"Дмитрий А.","BrightQuack":"Анна А.","BrightFluff":"Сергей А.","BrightWings":"Екатерина А.","BrightPond":"Андрей А.","BrightBrook":"Ольга А.","BrightRiver":"Алексей А.","BrightReed":"Наталья А.","BrightPebble":"Иван А.","BrightRipple":"Татьяна А.","BrightSplash":"Николай А.","BrightDrift":"Ирина А.","BrightScout":"Владимир А.","BrightSailor":"Елена А.","BrightStar":"Михаил А.","BrightSun":"Юлия А.","BrightMoon":"Павел А.","BrightCloud":"Светлана А.","BrightBreeze":"Евгений А.","BrightBuddy":"Марина А.","BrightPaddle":"Максим А.","BrightWave":"Анастасия А.","GoldenDuck":"Виктор А.","GoldenQuack":"Любовь А.","GoldenFluff":"Артём А.","GoldenWings":"Галина А.","GoldenPond":"Игорь А.","GoldenBrook":"Валентина А.","GoldenRiver":"Роман А.","GoldenReed":"Людмила А.","GoldenPebble":"Олег А.","GoldenRipple":"Алёна А.","GoldenSplash":"Ярослав А.","GoldenDrift":"Ксения А.","GoldenScout":"Борис А.","GoldenSailor":"Нина А.","GoldenStar":"Григорий А.","GoldenSun":"Зоя А.","GoldenMoon":"Тимур А.","GoldenCloud":"Вера А.","GoldenBreeze":"Василий А.","GoldenBuddy":"Полина А.","GoldenPaddle":"Леонид А.","GoldenWave":"Дарья А.","CozyDuck":"Константин А.","CozyQuack":"Жанна А.","CozyFluff":"Никита А.","CozyWings":"Алиса А.","CozyFeather":"Станислав А.","CozyPond":"Антон А.","CozyBrook":"Вероника А.","CozyRiver":"Виктория А.","CozyReed":"Егор А.","CozyPebble":"Диана А.","CozyRipple":"Вадим А.","CozySplash":"Лилия А.","CozyDrift":"Тимофей А.","CozyScout":"Маргарита А.","CozySailor":"Фёдор А.","CozySkipper":"Софья А.","CozyStar":"Кирилл А.","CozySun":"Алина А.","CozyMoon":"Вячеслав А.","CozyCloud":"Люба А.","CozyBreeze":"Аркадий А.","CozyBuddy":"Снежана А.","CozyPaddle":"Пётр А.","CozyWave":"Валерий А.","LittleDuck":"Александр П.","LittleQuack":"Мария П.","LittleFluff":"Дмитрий П.","LittleWings":"Анна П.","LittlePond":"Сергей П.","LittleBrook":"Екатерина П.","LittleRiver":"Андрей П.","LittleReed":"Ольга П.","LittlePebble":"Алексей П.","LittleRipple":"Наталья П.","LittleSplash":"Иван П.","LittleDrift":"Татьяна П.","LittleScout":"Николай П.","LittleSailor":"Ирина П.","LittleStar":"Владимир П.","LittleSun":"Елена П.","LittleMoon":"Михаил П.","LittleCloud":"Юлия П.","LittleBreeze":"Павел П.","LittleBuddy":"Светлана П.","LittlePaddle":"Евгений П.","LittleWave":"Марина П.","NimbleDuck":"Максим П.","NimbleQuack":"Анастасия П.","NimbleFluff":"Виктор П.","NimbleWings":"Любовь П.","NimblePond":"Артём П.","NimbleBrook":"Галина П.","NimbleRiver":"Игорь П.","NimbleReed":"Валентина П.","NimblePebble":"Роман П.","NimbleRipple":"Людмила П.","NimbleSplash":"Олег П.","NimbleDrift":"Алёна П.","NimbleScout":"Ярослав П.","NimbleSailor":"Ксения П.","NimbleStar":"Борис П.","NimbleSun":"Нина П.","NimbleMoon":"Григорий П.","NimbleCloud":"Зоя П.","NimbleBreeze":"Тимур П.","NimbleBuddy":"Вера П.","NimblePaddle":"Василий П.","NimbleWave":"Полина П.","DaringDuck":"Леонид П.","DaringQuack":"Дарья П.","DaringFluff":"Константин П.","DaringWings":"Жанна П.","DaringPond":"Никита П.","DaringBrook":"Алиса П.","DaringRiver":"Станислав П.","DaringReed":"Антон П.","DaringPebble":"Вероника П.","DaringRipple":"Виктория П.","DaringSplash":"Егор П.","DaringDrift":"Диана П.","DaringScout":"Вадим П.","DaringSailor":"Лилия П.","DaringStar":"Тимофей П.","DaringSun":"Маргарита П.","DaringMoon":"Фёдор П.","DaringCloud":"Софья П.","DaringBreeze":"Кирилл П.","DaringBuddy":"Алина П.","DaringPaddle":"Вячеслав П.","DaringWave":"Люба П.","KindDuck":"Аркадий П.","KindQuack":"Снежана П.","KindFluff":"Пётр П.","KindWings":"Валерий П.","KindFeather":"Александр В.","KindPond":"Мария В.","KindBrook":"Дмитрий В.","KindRiver":"Анна В.","KindReed":"Сергей В.","KindPebble":"Екатерина В.","KindRipple":"Андрей В.","KindSplash":"Ольга В.","KindDrift":"Алексей В.","KindScout":"Наталья В.","KindSailor":"Иван В.","KindSkipper":"Татьяна В.","KindStar":"Николай В.","KindSun":"Ирина В.","KindMoon":"Владимир В.","KindCloud":"Елена В.","KindBreeze":"Михаил В.","KindBuddy":"Юлия В.","KindPaddle":"Павел В.","KindWave":"Светлана В.","CalmDuck":"Евгений В.","CalmQuack":"Марина В.","CalmFluff":"Максим В.","CalmWings":"Анастасия В.","CalmFeather":"Виктор В.","CalmPond":"Любовь В.","CalmBrook":"Артём В.","CalmRiver":"Галина В.","CalmReed":"Игорь В.","CalmPebble":"Валентина В.","CalmRipple":"Роман В.","CalmSplash":"Людмила В.","CalmDrift":"Олег В.","CalmScout":"Алёна В.","CalmSailor":"Ярослав В.","CalmSkipper":"Ксения В.","CalmStar":"Борис В.","CalmSun":"Нина В.","CalmMoon":"Григорий В.","CalmCloud":"Зоя В.","CalmBreeze":"Тимур В.","CalmBuddy":"Вера В.","CalmPaddle":"Василий В.","CalmWave":"Полина В.","BouncyDuck":"Леонид В.","BouncyQuack":"Дарья В.","BouncyFluff":"Константин В.","BouncyWings":"Жанна В.","BouncyPond":"Никита В.","BouncyBrook":"Алиса В.","BouncyRiver":"Станислав В.","BouncyReed":"Антон В.","BouncyPebble":"Вероника В.","BouncyRipple":"Виктория В.","BouncySplash":"Егор В.","BouncyDrift":"Диана В.","BouncyScout":"Вадим В.","BouncySailor":"Лилия В.","BouncyStar":"Тимофей В.","BouncySun":"Маргарита В.","BouncyMoon":"Фёдор В.","BouncyCloud":"Софья В.","BouncyBreeze":"Кирилл В.","BouncyBuddy":"Алина В.","BouncyPaddle":"Вячеслав В.","BouncyWave":"Люба В.","MightyDuck":"Аркадий В.","MightyQuack":"Снежана В.","MightyFluff":"Пётр В.","MightyWings":"Валерий В.","MightyPond":"Александр Н.","MightyBrook":"Мария Н.","MightyRiver":"Дмитрий Н.","MightyReed":"Анна Н.","MightyPebble":"Сергей Н.","MightyRipple":"Екатерина Н.","MightySplash":"Андрей Н.","MightyDrift":"Ольга Н.","MightyScout":"Алексей Н.","MightySailor":"Наталья Н.","MightyStar":"Иван Н.","MightySun":"Татьяна Н.","MightyMoon":"Николай Н.","MightyCloud":"Ирина Н.","MightyBreeze":"Владимир Н.","MightyBuddy":"Елена Н.","MightyPaddle":"Михаил Н.","MightyWave":"Юлия Н.","WittyDuck":"Павел Н.","WittyQuack":"Светлана Н.","WittyFluff":"Евгений Н.","WittyWings":"Марина Н.","WittyFeather":"Максим Н.","WittyPond":"Анастасия Н.","WittyBrook":"Виктор Н.","WittyRiver":"Любовь Н.","WittyReed":"Артём Н.","WittyPebble":"Галина Н.","WittyRipple":"Игорь Н.","WittySplash":"Валентина Н.","WittyDrift":"Роман Н.","WittyScout":"Людмила Н.","WittySailor":"Олег Н.","WittySkipper":"Алёна Н.","WittyStar":"Ярослав Н.","WittySun":"Ксения Н.","WittyMoon":"Борис Н.","WittyCloud":"Нина Н.","WittyBreeze":"Григорий Н.","WittyBuddy":"Зоя Н.","WittyPaddle":"Тимур Н.","WittyWave":"Вера Н.","LivelyDuck":"Василий Н.","LivelyQuack":"Полина Н.","LivelyFluff":"Леонид Н.","LivelyWings":"Дарья Н.","LivelyPond":"Константин Н.","LivelyBrook":"Жанна Н.","LivelyRiver":"Никита Н.","LivelyReed":"Алиса Н.","LivelyPebble":"Станислав Н.","LivelyRipple":"Антон Н.","LivelySplash":"Вероника Н.","LivelyDrift":"Виктория Н.","LivelyScout":"Егор Н.","LivelySailor":"Диана Н.","LivelyStar":"Вадим Н.","LivelySun":"Лилия Н.","LivelyMoon":"Тимофей Н.","LivelyCloud":"Маргарита Н.","LivelyBreeze":"Фёдор Н.","LivelyBuddy":"Софья Н.","LivelyPaddle":"Кирилл Н.","LivelyWave":"Алина Н.","CuddlyDuck":"Вячеслав Н.","CuddlyQuack":"Люба Н.","CuddlyFluff":"Аркадий Н.","CuddlyWings":"Снежана Н.","CuddlyPond":"Пётр Н.","CuddlyBrook":"Валерий Н.","CuddlyRiver":"Александр Д.","CuddlyReed":"Мария Д.","CuddlyPebble":"Дмитрий Д.","CuddlyRipple":"Анна Д.","CuddlySplash":"Сергей Д.","CuddlyDrift":"Екатерина Д.","CuddlyScout":"Андрей Д.","CuddlySailor":"Ольга Д.","CuddlyStar":"Алексей Д.","CuddlySun":"Наталья Д.","CuddlyMoon":"Иван Д.","CuddlyCloud":"Татьяна Д.","CuddlyBreeze":"Николай Д.","CuddlyBuddy":"Ирина Д.","CuddlyPaddle":"Владимир Д.","CuddlyWave":"Елена Д.","SillyDuck":"Михаил Д.","SillyQuack":"Юлия Д.","SillyFluff":"Павел Д.","SillyWings":"Светлана Д.","SillyFeather":"Евгений Д.","SillyPond":"Марина Д.","SillyBrook":"Максим Д.","SillyRiver":"Анастасия Д.","SillyReed":"Виктор Д.","SillyPebble":"Любовь Д.","SillyRipple":"Артём Д.","SillySplash":"Галина Д.","SillyDrift":"Игорь Д.","SillyScout":"Валентина Д.","SillySailor":"Роман Д.","SillySkipper":"Людмила Д.","SillyStar":"Олег Д.","SillySun":"Алёна Д.","SillyMoon":"Ярослав Д.","SillyCloud":"Ксения Д.","SillyBreeze":"Борис Д.","SillyBuddy":"Нина Д.","SillyPaddle":"Григорий Д.","SillyWave":"Зоя Д.","DapperDuck":"Тимур Д.","DapperQuack":"Вера Д.","DapperFluff":"Василий Д.","DapperWings":"Полина Д.","DapperPond":"Леонид Д.","DapperBrook":"Дарья Д.","DapperRiver":"Константин Д.","DapperReed":"Жанна Д.","DapperPebble":"Никита Д.","DapperRipple":"Алиса Д.","DapperSplash":"Станислав Д.","DapperDrift":"Антон Д.","DapperScout":"Вероника Д.","DapperSailor":"Виктория Д.","DapperStar":"Егор Д.","DapperSun":"Диана Д.","DapperMoon":"Вадим Д.","DapperCloud":"Лилия Д.","DapperBreeze":"Тимофей Д.","DapperBuddy":"Маргарита Д.","DapperPaddle":"Фёдор Д.","DapperWave":"Софья Д.","PeppyDuck":"Кирилл Д.","PeppyQuack":"Алина Д.","PeppyFluff":"Вячеслав Д.","PeppyWings":"Люба Д.","PeppyFeather":"Аркадий Д.","PeppyPond":"Снежана Д.","PeppyBrook":"Пётр Д.","PeppyRiver":"Валерий Д.","PeppyReed":"Александр Т.","PeppyPebble":"Мария Т.","PeppyRipple":"Дмитрий Т.","PeppySplash":"Анна Т.","PeppyDrift":"Сергей Т.","PeppyScout":"Екатерина Т.","PeppySailor":"Андрей Т.","PeppySkipper":"Ольга Т.","PeppyStar":"Алексей Т.","PeppySun":"Наталья Т.","PeppyMoon":"Иван Т.","PeppyCloud":"Татьяна Т.","PeppyBreeze":"Николай Т.","PeppyBuddy":"Ирина Т.","PeppyPaddle":"Владимир Т.","PeppyWave":"Елена Т.","FluffyDuck":"Михаил Т.","FluffyQuack":"Юлия Т.","FluffyFluff":"Павел Т.","FluffyWings":"Светлана Т.","FluffyPond":"Евгений Т.","FluffyBrook":"Марина Т.","FluffyRiver":"Максим Т.","FluffyReed":"Анастасия Т.","FluffyPebble":"Виктор Т.","FluffyRipple":"Любовь Т.","FluffySplash":"Артём Т.","FluffyDrift":"Галина Т.","FluffyScout":"Игорь Т.","FluffySailor":"Валентина Т.","FluffyStar":"Роман Т.","FluffySun":"Людмила Т.","FluffyMoon":"Олег Т.","FluffyCloud":"Алёна Т.","FluffyBreeze":"Ярослав Т.","FluffyBuddy":"Ксения Т.","FluffyPaddle":"Борис Т.","FluffyWave":"Нина Т.","ChirpyDuck":"Григорий Т.","ChirpyQuack":"Зоя Т.","ChirpyFluff":"Тимур Т.","ChirpyWings":"Вера Т.","ChirpyPond":"Василий Т.","ChirpyBrook":"Полина Т.","ChirpyRiver":"Леонид Т.","ChirpyReed":"Дарья Т.","ChirpyPebble":"Константин Т.","ChirpyRipple":"Жанна Т.","ChirpySplash":"Никита Т.","ChirpyDrift":"Алиса Т.","ChirpyScout":"Станислав Т.","ChirpySailor":"Антон Т.","ChirpyStar":"Вероника Т.","ChirpySun":"Виктория Т.","ChirpyMoon":"Егор Т.","ChirpyCloud":"Диана Т.","ChirpyBreeze":"Вадим Т.","ChirpyBuddy":"Лилия Т.","ChirpyPaddle":"Тимофей Т.","ChirpyWave":"Маргарита Т.","TinyDuck":"Фёдор Т.","TinyQuack":"Софья Т.","TinyFluff":"Кирилл Т.","TinyWings":"Алина Т.","TinyFeather":"Вячеслав Т.","TinyPond":"Люба Т.","TinyBrook":"Аркадий Т.","TinyRiver":"Снежана Т.","TinyReed":"Пётр Т.","TinyPebble":"Валерий Т.","TinyRipple":"Александр Л.","Alejandro":"Александр К.","María":"Мария К.","Carlos":"Дмитрий К.","Lucía":"Анна К.","José":"Сергей К.","Sofía":"Екатерина К.","Antonio":"Андрей К.","Isabella":"Ольга К.","Juan":"Алексей К.","Valentina":"Наталья К.","Luis":"Иван К.","Camila":"Татьяна К.","Pedro":"Николай К.","Gabriela":"Ирина К.","Fernando":"Владимир К.","Daniela":"Елена К.","Jorge":"Михаил К.","Elena":"Юлия К.","Andrés":"Павел К.","Paula":"Светлана К.","Manuel":"Евгений К.","Sara":"Марина К.","Francisco":"Максим К.","Carla":"Анастасия К.","Diego":"Виктор К.","Martina":"Любовь К.","Rafael":"Артём К.","Óscar":"Игорь К.","Julia":"Валентина К.","Ricardo":"Роман К.","Claudia":"Людмила К.","Eduardo":"Олег К.","Ramón":"Ярослав К.","Rocío":"Ксения К.","Mario":"Борис К.","Natalia":"Нина К.","Hugo":"Григорий К.","Verónica":"Зоя К.","Pablo":"Тимур К.","Lola":"Вера К.","Iván":"Василий К.","Alejandra":"Полина К.","Raúl":"Леонид К.","Irene":"Дарья К.","Tomás":"Константин К.","Noelia":"Жанна К.","Santiago":"Никита К.","Bianca":"Алиса К.","Miguel":"Станислав К.","Ana":"Антон К.","Javier":"Вероника К.","Carmen":"Виктория К.","Rubén":"Егор К.","Beatriz":"Диана К.","Ángel":"Вадим К.","Mónica":"Лилия К.","Enrique":"Тимофей К.","Teresa":"Маргарита К.","Adrián":"Фёдор К.","Rosa":"Софья К.","Salvador":"Кирилл К.","Marta":"Алина К.","Alberto":"Вячеслав К.","Marina":"Люба К.","Gonzalo":"Аркадий К.","Verena":"Снежана К.","Sergio":"Пётр К.","Nerea":"Валерий К.","Emilio":"Александр М.","João":"Мария М.","Maria":"Дмитрий М.","Lucas":"Екатерина М.","Gabriel":"Ольга М.","Luísa":"Алексей М.","Clara":"Иван М.","Mateus":"Татьяна М.","Bruno":"Ирина М.","Lara":"Владимир М.","Tiago":"Елена М.","Helena":"Михаил М.","André":"Юлия М.","Mariana":"Павел М.","Isabela":"Евгений М.","Gustavo":"Марина М.","Rita":"Максим М.","Leandro":"Анастасия М.","Sofia":"Виктор М.","Felipe":"Любовь М.","Carolina":"Артём М.","Inês":"Игорь М.","Rodrigo":"Валентина М.","Letícia":"Роман М.","Caio":"Людмила М.","Vitória":"Олег М.","Henrique":"Алёна М.","Diogo":"Зоя М.","Juliana":"Тимур М.","Paulo":"Вера М.","Manuela":"Василий М.","Alexandre":"Полина М.","Patrícia":"Леонид М.","Vinícius":"Дарья М.","Renata":"Константин М.","Antônio":"Жанна М.","Catarina":"Никита М.","Murilo":"Алиса М.","Jéssica":"Станислав М.","Ronan":"Маргарита М.","Cláudia":"Фёдор М.","Joana":"Софья М.","Vítor":"Кирилл М.","Cecília":"Алина М.","Duarte":"Вячеслав М.","Sílvia":"Люба М.","Fábio":"Аркадий М.","Guilherme":"Пётр М.","Márcio":"Валерий М.","Lorena":"Александр С.","Ahmet":"Мария А.","Ayşe":"Дмитрий А.","Mehmet":"Анна А.","Fatma":"Сергей А.","Mustafa":"Екатерина А.","Emine":"Андрей А.","Ali":"Ольга А.","Zeynep":"Алексей А.","Hasan":"Наталья А.","Elif":"Иван А.","Hüseyin":"Татьяна А.","Hatice":"Николай А.","İbrahim":"Ирина А.","Meryem":"Владимир А.","Yusuf":"Елена А.","Aylin":"Михаил А.","Osman":"Юлия А.","Selin":"Павел А.","Ramazan":"Светлана А.","Gamze":"Евгений А.","Murat":"Марина А.","Seda":"Максим А.","Halil":"Анастасия А.","Buse":"Виктор А.","Kemal":"Любовь А.","Derya":"Артём А.","Bekir":"Галина А.","Gül":"Игорь А.","Veli":"Валентина А.","Tuğba":"Роман А.","Recep":"Людмила А.","Cansu":"Олег А.","Tuncay":"Алёна А.","Yasemin":"Ярослав А.","Metin":"Ксения А.","İrem":"Борис А.","Sinan":"Нина А.","Melis":"Григорий А.","Cem":"Зоя А.","Nazan":"Тимур А.","Serkan":"Вера А.","Pelin":"Василий А.","Orhan":"Полина А.","Şeyma":"Леонид А.","Can":"Дарья А.","Nurgül":"Константин А.","Volkan":"Жанна А.","Ezgi":"Никита А.","Barış":"Алиса А.","Aslı":"Станислав А.","Burak":"Антон А.","Ebru":"Вероника А.","Onur":"Виктория А.","Deniz":"Егор А.","Ayhan":"Диана А.","Sibel":"Вадим А.","Erkan":"Лилия А.","Hakan":"Тимофей А.","Bahar":"Маргарита А.","Levent":"Фёдор А.","Dilan":"Софья А.","Serap":"Кирилл А.","Kaan":"Алина А.","Sevgi":"Вячеслав А.","Tamer":"Люба А.","Cemre":"Аркадий А.","Engin":"Снежана А.","Figen":"Пётр А.","Yasin":"Валерий А.","Furkan":"Александр П.","Jean":"Мария П.","Marie":"Дмитрий П.","Pierre":"Анна П.","Claire":"Сергей П.","Michel":"Екатерина П.","Sophie":"Андрей П.","Jacques":"Ольга П.","Camille":"Алексей П.","Alain":"Наталья П.","Julie":"Иван П.","Chloé":"Николай П.","Louis":"Ирина П.","Émilie":"Владимир П.","Manon":"Михаил П.","Henri":"Юлия П.","Lucie":"Павел П.","Marc":"Светлана П.","Georges":"Марина П.","Charlotte":"Максим П.","René":"Анастасия П.","Léa":"Виктор П.","Raymond":"Любовь П.","Emma":"Артём П.","Bernard":"Галина П.","Anaïs":"Игорь П.","Gérard":"Валентина П.","Zoé":"Роман П.","Claude":"Людмила П.","Nina":"Ярослав П.","François":"Ксения П.","Océane":"Борис П.","Christian":"Нина П.","Élodie":"Григорий П.","Thierry":"Зоя П.","Jean-Luc":"Вера П.","Justine":"Василий П.","Laurent":"Полина П.","Inès":"Леонид П.","Pascal":"Дарья П.","Clémence":"Константин П.","Roger":"Жанна П.","Mathilde":"Никита П.","Nicolas":"Алиса П.","Alice":"Станислав П.","Benoît":"Антон П.","Valérie":"Вероника П.","Philippe":"Виктория П.","Caroline":"Егор П.","Stéphane":"Диана П.","Éric":"Вадим П.","Céline":"Лилия П.","Olivier":"Тимофей П.","Isabelle":"Маргарита П.","Vincent":"Фёдор П.","Amandine":"Софья П.","Guillaume":"Кирилл П.","Marion":"Алина П.","Sébastien":"Вячеслав П.","Florence":"Люба П.","Antoine":"Аркадий П.","Julie-Anne":"Снежана П.","Hélène":"Пётр П.","Dominique":"Валерий П.","Sylvain":"Александр В.","Adi":"Мария Н.","Ayu":"Дмитрий Н.","Budi":"Анна Н.","Citra":"Сергей Н.","Dwi":"Екатерина Н.","Eka":"Андрей Н.","Fajar":"Ольга Н.","Fitri":"Алексей Н.","Gita":"Наталья Н.","Hana":"Иван Н.","Ika":"Татьяна Н.","Indra":"Николай Н.","Joko":"Ирина Н.","Kartika":"Владимир Н.","Lestari":"Елена Н.","Mahira":"Михаил Н.","Nanda":"Юлия Н.","Novi":"Павел Н.","Putra":"Светлана Н.","Rani":"Евгений Н.","Rudi":"Марина Н.","Sari":"Максим Н.","Santoso":"Анастасия Н.","Siti":"Виктор Н.","Surya":"Любовь Н.","Tika":"Артём Н.","Wawan":"Галина Н.","Wati":"Игорь Н.","Yani":"Валентина Н.","Yudha":"Роман Н.","Anggi":"Людмила Н.","Dinda":"Олег Н.","Hadi":"Алёна Н.","Ilham":"Ярослав Н.","Jihan":"Ксения Н.","Kiki":"Борис Н.","Lila":"Нина Н.","Melati":"Григорий Н.","Nia":"Зоя Н.","Prita":"Тимур Н.","Rizki":"Вера Н.","Siska":"Василий Н.","Tanti":"Полина Н.","Vina":"Леонид Н.","Wanda":"Дарья Н.","Zainab":"Константин Н.","Fina":"Жанна Н.","Reza":"Никита Н.","Dedi":"Алиса Н.","Taufik":"Станислав Н.","Agus":"Антон Н.","Bella":"Вероника Н.","Cahya":"Виктория Н.","Dara":"Егор Н.","Eko":"Диана Н.","Farah":"Вадим Н.","Galih":"Лилия Н.","Hendra":"Тимофей Н.","Intan":"Маргарита Н.","Jaya":"Фёдор Н.","Kirana":"Софья Н.","Lina":"Кирилл Н.","Mira":"Алина Н.","Niko":"Вячеслав Н.","Putri":"Люба Н.","Raka":"Аркадий Н.","Sinta":"Снежана Н.","Tari":"Пётр Н.","Vita":"Валерий Н.","Lukas":"Мария Т.","Mia":"Сергей Т.","Leon":"Екатерина Т.","Anna":"Андрей Т.","Elias":"Ольга Т.","Max":"Наталья Т.","Jonas":"Татьяна Т.","Noah":"Ирина Т.","Lena":"Владимир Т.","Hannah":"Михаил Т.","Ben":"Юлия Т.","Alexander":"Светлана Т.","Tim":"Анастасия Т.","Lilly":"Артём Т.","Samuel":"Галина Т.","Eva":"Роман Т.","Adrian":"Людмила Т.","Lea":"Олег Т.","Oskar":"Ксения Т.","Johanna":"Борис Т.","Moritz":"Зоя Т.","Stella":"Тимур Т.","Friedrich":"Вера Т.","Greta":"Леонид Т.","Emil":"Дарья Т.","Luisa":"Константин Т.","Simon":"Алиса Т.","Ida":"Станислав Т.","Finn":"Антон Т.","Amelie":"Вероника Т.","Theo":"Виктория Т.","Lotta":"Егор Т.","Jannik":"Диана Т.","Anton":"Лилия Т.","Philipp":"Маргарита Т.","Ella":"Фёдор Т.","Matteo":"Софья Т.","Alina":"Кирилл Т.","Jakob":"Алина Т.","Melina":"Вячеслав Т.","Benjamin":"Люба Т.","Fiona":"Аркадий Т.","Sina":"Пётр Т.","Tobias":"Валерий Т.","Leonie":"Александр Л."};
  const KEY='duck_rings_profile_v1', META=KEY+'_meta', MAX_PARTS=32;
  const params=new URLSearchParams(w.location.search);
  let provider='local', platform='local', bridge, profile='', ready=false;
  let hidden=!!w.document.hidden, platformHidden=false, pendingAd=null, adsTimedOut=false;
  let journal=null, storageId='', slot='b', revision=0, saving=false, saveTimer;
  let cloud=true, lastSaveError='';
  let bannersStarted=false,bannerVisible=false,bannerClosed=false,bannerSearching=false,bannerRetry;
  let bannerQueue=Promise.resolve(),bannerHeight=0;
  function wantBanner(){return bannersStarted&&ready&&provider!=='local'&&!hidden&&!platformHidden&&!pendingAd&&!bannerClosed;}
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
          const result=await timeout(bridge.send(wanted?'VKWebAppShowBannerAd':'VKWebAppHideBannerAd',wanted?{banner_location:'bottom',layout_type:'overlay',can_close:true}:{}),10000);
          if(result?.result===true) {
            bannerVisible=wanted;
            // With resize, the host already reduced the iframe; avoid double padding.
            bannerSpace(wanted&&result.layout_type!=='resize'?(result.banner_height||96):0);
          }
        }catch(_){}
      } else if(wanted&&!bannerVisible&&!bannerSearching) {
        bannerSearching=true;
        try{w.FAPI.invokeUIMethod('requestBannerAds');}catch(_){bannerSearching=false;}
      } else if(!wanted&&(bannerVisible||bannerSearching)) {
        try{w.FAPI.invokeUIMethod('hideBannerAds');}catch(_){}
        bannerSearching=false;bannerVisible=false;bannerSpace(0);
      }
      retryBanner();
    }).catch(()=>{});
    return bannerQueue;
  }
  function startBanners(){bannersStarted=true;return syncBanner();}
  function okBanner(method,result,data) {
    if(method==='requestBannerAds') {
      if(result==='ok'&&data==='ad_loaded') {
        if(wantBanner())w.FAPI.invokeUIMethod('showBannerAds','bottom');else syncBanner();
      } else if(result==='ok'&&(data==='banner_shown'||data==='ad_shown')) {
        bannerVisible=true;bannerSpace(w.innerWidth<600?106:96);if(!wantBanner())syncBanner();
      } else if(data==='hidden_by_user') {
        bannerClosed=true;bannerVisible=false;bannerSpace(0);syncBanner();
      } else if(result==='error') {bannerSearching=false;if(data==='disabled'||data==='not_supported')bannerClosed=true;retryBanner();}
    } else if(method==='showBannerAds'&&result==='ok'&&String(data)==='true') {
      bannerVisible=true;bannerSpace(w.innerWidth<600?106:96);if(!wantBanner())syncBanner();
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
  function russianProfile(value) {
    const data=JSON.parse(value);
    let changed=false;
    function visit(node) {
      if(!node||typeof node!=='object')return;
      for(const key of Object.keys(node)) {
        const current=node[key];
        if(/^(playerName|name|nickname)$/i.test(key)&&typeof current==='string'&&Object.prototype.hasOwnProperty.call(RUSSIAN_GENERATED_NAMES,current)) {
          node[key]=RUSSIAN_GENERATED_NAMES[current];changed=true;
        } else if(current&&typeof current==='object')visit(current);
      }
    }
    visit(data);
    return changed?JSON.stringify(data):value;
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
  function finishAd(success) {
    if(!pendingAd)return;
    const pending=pendingAd;pendingAd=null;w.clearTimeout(pending.timer);pending.resolve(success===true);syncBanner();
  }
  function okCallback(method,result,data) {
    okBanner(method,result,data);
    if(!pendingAd)return;
    if(pendingAd.rewarded) {
      if(method==='loadAd'&&pendingAd.phase==='loading') {
        if(result==='ok'&&data==='ready'){pendingAd.phase='showing';w.FAPI.UI.showLoadedAd();}
        else if(result!=='ok')finishAd(false);
      } else if(method==='showLoadedAd'&&pendingAd.phase==='showing') {
        if(result==='ok'&&(data==='complete'||data==='ad_shown'))finishAd(true);
        else if(result!=='ok')finishAd(false);
      }
    } else if(method==='showAd') {
      if(result==='ok'&&data==='ad_shown')finishAd(true);
      else if(result!=='ok')finishAd(false);
    }
  }
  async function showAd(rewarded) {
    if(!ready||provider==='local'||pendingAd||adsTimedOut)return false;
    return new Promise(resolve=>{
      pendingAd={rewarded,resolve,phase:rewarded?'loading':'showing',timer:w.setTimeout(()=>{
        // FAPI has no request IDs; never let a late callback reward a later request.
        adsTimedOut=true;finishAd(false);
      },180000)};
      const request=pendingAd;
      const run=()=>{if(pendingAd!==request)return;try {
        if(provider==='bridge') {
          bridge.send('VKWebAppShowNativeAds',{ad_format:rewarded?'reward':'interstitial'})
            .then(data=>finishAd(data?.result===true),()=>finishAd(false));
        } else if(rewarded)w.FAPI.UI.loadAd();else w.FAPI.UI.showAd();
      } catch(_){finishAd(false);}};
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
    if(journal) {
      const translated=russianProfile(journal.data);
      if(translated!==journal.data)journal={...journal,data:translated,updatedAt:Math.max(Date.now(),(journal.updatedAt||0)+1),pending:provider!=='local'};
    }
    profile=journal?.data||'';ready=true;
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
    get saveStatus(){return {pending:!!journal?.pending,error:lastSaveError};},
    get bannerStatus(){return {visible:bannerVisible,height:bannerHeight,closed:bannerClosed};}
  });
})(window);
