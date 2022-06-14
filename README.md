# WasaTeam Interview Assignment


## 運行 (Getting Start)

```
$ #session 1 ( run metro server )
$ npm install
$ cd ios/ && pod install && cd ../
$ npm run start 


$ #session 2 ( run api server )
$  ./node_modules/.bin/mocki run 

$ #session 3 ( build & start application )
$ #ios 
$ npm run ios

$ #android
$ npm run android
```

## 檔案結構 ( Repo Files Structure )

- src
  - components/
  - screens/
  - constants.tsx
  - types.tsx
- App.tsx
- index.js
- package.json
- ios/
- android/

## 導覽結構 ( Navigation Structure )

- RootStack (@react-navigation/native-stack)
  - LandingScreen
  - DrawerStack (@react-navigation/drawer)
    - BottomTabsStack (@react-navigation/bottom-tabs)
      - HomeStack (@react-navigation/native-stack)
        - HomeScreen
      - ProfileStack (@react-navigation/native-stack)
        - ProfileScreen
    - PrivacyPolicyScreen


## 上架流程 ( Upload Flow )

### IOS

1. 首先要先擁有 apple developer 帳號，並且 enroll Apple Developer Program
2. 接著要在 [apple developer](https://developer.apple.com/account/) > Certificates， IDs & Profiles 申請一組 App Bundle ID 為將來在 app store connect 開立 app 做準備。 
3. 前往 [app store connect](https://appstoreconnect.apple.com/) 建立 app， 記得要選擇剛才在 apple developer 所建立的 bundle ID。
4. 在發布 beta 版本前，記得要先上好 AppIcons，而 AppIcon 不能有 alpha 值。
5. 接著確定 bundle id，team 一致，且版號不能和前次上傳相同(包含 main version 跟 build version)，就可以將 app archive 後透過 auto signing 的方式將 app 上傳至，該 team 的 app store connect 上。
6. 會於 app store connect > TestFlight 上看見 beta 版本釋出，等 apple 端處理完，即可點擊出口合規。
7. 此時即可以發布內部測試版本，也可以開始審核外部測試版本，而外部測試通常會在 0 ~ 2 內完成。
8. 而最終若是要上架到 app store ， 會需要將 app 在 app store connect 的所有基本資訊填妥，包含定價與供應狀況 / App 資訊 / App 隱私權。
9. 確定填妥後，就可以將 App 所要上架的版本號送出審核。
10. 審核過後，可以使用當初所提供給 App store connect 的關鍵字查詢到 app。
 
**以上記得要將 deploy key 的 .p12 檔案妥善保存好，可以到 keychain access 匯出。**


### Android

1. 首先要先擁有 google 帳號，並且使用該帳號申請 google play console 開發人員帳號。
2. 申請完畢後，可以使用 keytools gen 出 release.keystore 且切記要保存妥當。
3. 並且使用 release.keystore 在 local 將 .aab (原為 .apk) build 出來，但在 build 之前要先確認 sdk version 有沒有符合 google 最新政策的規範，還有位於 android/app/build.gradle 的 versionCode 有沒有和上次上傳建置檔案相符，如果有相符，請往上加版號。
4. 而 build 後將會有 .aab 檔案可以上傳至 google play console，進行內部測試。
5. 如果沒問題，就可以將內部測試版本送上架審核。
6. 審查過後一樣可以在 google play 上看見自己的 app。


**以上記得要將 release.keystore 檔案妥善保存好**
