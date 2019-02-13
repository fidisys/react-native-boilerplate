# react-native-boilerplate

React Native boilerplate using react-native-cli with react-navigation

## Description

> Created React Native boilerplate using react-native-cli. This sample scaffolding can be used for any projects from small scale to large scale.

## JDK and Android development environment setup

https://facebook.github.io/react-native/docs/getting-started > Building Projects with Native Code

## Project introduce

```
git clone https://github.com/prasanthLalapeta/react-native-boilerplate.git  

cd react-native-boilerplate

npm install
```

## Start Server

Use Emulator for running project

```
react-native start

react-native run-android
```

## If compilation fails while running app for first time

> For using react-navigation

```
npm install --save react-native-gesture-handler
react-native link
```

> For using react-native-vector-icons 'copy fonts folder from node_modules/react-native-vector-icons to android/app/src/main/assets/fonts'

## Packages used for scaffolding
- [√] react
- [√] react-native
- [√] react-navigation
- [√] react-native-gesture-handler
- [√] react-native-vector-icons
- [√] native-base
- [√] react-native-splash-screen

## Inside Box

### [√] splashscreen

* Replace all icon.png's inside `android/app/src/main/res/mipmap-*` with your splashimage by naming it as icon.png with various resolutions.
* Adjust width and color of splashimage by editing `launch_screen.xml` in `android/app/src/main/res/layout`.

### [√] navigations

* Available navigations in this boilerplate that are required for any small and large scale apps are:

```
 - AppSwitchNavigator
    - AuthenticationScreen
    - OnboardScreen
    - TermsAndConditionsScreen
    - HomeScreenNavigation
          - HomeScreenNavigation -
            - HomeScreenTabNavigator
              - Tab 1 - HomeStack
              - Tab 2 - FavouritesStack
              - Tab 3 - NotificationsStack
              - Tab 4 - ProfileStack
            - Any files you don't want to be a part of the Tab Navigator can go here.
  ```

  * Used navigations in this boilerplate are:

  - [√] createSwitchNavigator
  - [√] createBottomTabNavigator
  - [√] createDrawerNavigator
  - [√] createStackNavigator

## Available UI Clones via `git checkout branchname`

1. git checkout [UIClone/Instagram](https://github.com/prasanthLalapeta/react-native-boilerplate/tree/UIClone/Instagram)

![Instagram UI Clone](https://raw.githubusercontent.com/prasanthLalapeta/Assets/master/react-native/Instagram-Clone.png)

Pull requests accepted with love
