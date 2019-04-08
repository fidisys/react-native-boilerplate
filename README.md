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

## Installation bugs

Run `npm audit fix` if needed any.

## Change Project Name or Updating react-native version

- Delete `android` && `ios` folder from root directory, update your app-name in `app.json` file and run `react-native eject`

>run `sudo chmod 777 android -R` if any android or ios folder got locked. Usually folder will be locked if we use `sudo`

- then open in `android studio` to sync `gradle`

## Packages setup

- Link `react-navigation` dependency

>run `react-native link react-native-gesture-handler`

- To finalise installation of react-native-gesture-handler for Android, be sure to make the necessary modifications to `MainActivity.java`:

```
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

- Link `react-native-vector-icons` dependency

>run `react-native link react-native-vector-icons`

- For using react-native-vector-icons 'copy fonts folder from node_modules/react-native-vector-icons to android/app/src/main/assets/fonts'

- To finalise installation of `react-native-vector-icons` Edit `android/app/build.gradle` ( NOT `android/build.gradle` ) and add the following:

```
apply plugin: 'com.android.application'

android {
  ...
}

dependencies {
  compile fileTree(dir: 'libs', include: ['*.jar'])
  compile "com.android.support:appcompat-v7:23.0.1"
  compile "com.facebook.react:react-native:+"  // From node_modules
+ compile project(':react-native-vector-icons')
}
```
- Edit your `MainApplication.java (deep in android/app/src/main/java/...)` to look like this (note two places to edit):

```
package com.myapp;

+ import com.oblador.vectoricons.VectorIconsPackage;

....

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage()
+   , new VectorIconsPackage()
    );
  }

}
```
- Link `react-native-splash-screen` dependency

>run `react-native link react-native-splash-screen`

- Update the `MainActivity.java` to use react-native-splash-screen via the following changes:

```
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here
// react-native-splash-screen < 0.3.1
import com.cboy.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
    // ...other code
}

```
- Create a file called `launch_screen.xml` in `app/src/main/res/layout` (create the layout-folder if it doesn't exist). The contents of the file should be the following:

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/white"
    android:gravity="center">
    <ImageView
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:layout_marginTop="24dp"
        android:src="@mipmap/icon"
    />
</LinearLayout>
```
- Create a file called `colors.xml` in `app/src/main/res/values`. The contents of the file should be the following:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="blue">#4F6D7A</color>
    <color name="white">#FFFFFF</color>
    <color name="primary_dark">#000000</color>
</resources>

```
- Add icon.png's inside android/app/src/main/res/mipmap-* with your splashimage by naming it as icon.png with various resolutions.



## Start Server

Use Emulator for running project

```
react-native start

react-native run-android
```

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

  ```
  - [√] createSwitchNavigator
  - [√] createBottomTabNavigator
  - [√] createDrawerNavigator
  - [√] createStackNavigator
  ```

## Available UI Clones via `git checkout branchname`

1. git checkout [UIClone/Instagram](https://github.com/prasanthLalapeta/react-native-boilerplate/tree/UIClone/Instagram)

![Instagram UI Clone](https://raw.githubusercontent.com/prasanthLalapeta/Assets/master/react-native/Instagram-Clone.png)

Pull requests accepted with love
