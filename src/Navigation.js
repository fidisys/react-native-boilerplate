import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { HomeScreen } from './containers/HomeScreen';
import { AppDrawerNavigator } from './containers/HomeScreen/navigation';
import { AuthenticationScreen } from './containers/AuthenticationScreen';
import { OnboardingScreen } from './containers/OnboardingScreen';
import { TermsAndConditionsScreen } from './containers/TermsAndConditionsScreen';
import { DetailScreen } from './containers/DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';

/**
* - AppSwitchNavigator
*    - AuthenticationScreen
*    - OnboardScreen
*    - TermsAndConditionsScreen
*    - AppDrawerNavigator
*          - HomeScreen - HomeScreenStackNavigator(needed for header and to change the header based on the                     tab)
*            - HomeScreenTabNavigator
*              - Tab 1 - HomeStack
*              - Tab 2 - FavouritesStack
*              - Tab 3 - NotificationsStack
*              - Tab 4 - ProfileStack
*            - Any files you don't want to be a part of the Tab Navigator can go here.
*/


const AppSwitchNavigator = createSwitchNavigator(
  {
    Authentication: { screen: AuthenticationScreen },
    Onboarding: { screen: OnboardingScreen },
    TermsAndConditions: { screen: TermsAndConditionsScreen },
    Home: { screen: AppDrawerNavigator }
  },
  {
    initialRouteName: "Authentication"
  }
);

export const Navigation = createAppContainer(AppSwitchNavigator);
