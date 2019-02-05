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

react-native start

react-native run-android
```

## Available UI Clones via `git checkout branchname`

1. git checkout [UIClone/Instagram](https://github.com/prasanthLalapeta/react-native-boilerplate/tree/UIClone/Instagram)

![Instagram UI Clone](https://raw.githubusercontent.com/prasanthLalapeta/Assets/master/react-native/Instagram-Clone.png)

#### Start Server

Use Emulator for running project

## Packages used for scaffolding
- [√] react
- [√] react-native
- [√] react-navigation
- [√] react-native-gesture-handler
- [√] react-native-vector-icons
- [√] native-base

## If compilation fails while running app for first time

> For using react-navigation

```
npm install --save react-native-gesture-handler
react-native link
```

> For using react-native-vector-icons 'copy fonts folder from node_modules/react-native-vector-icons to android/app/src/main/assets/fonts'

Pull requests accepted with love
