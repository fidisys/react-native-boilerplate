import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { HomeScreenNavigation } from './containers/HomeScreen/navigation';
import { AuthenticationScreen } from './containers/AuthenticationScreen';
import { OnboardingScreen } from './containers/OnboardingScreen';
import { TermsAndConditionsScreen } from './containers/TermsAndConditionsScreen';

/**
* - AppSwitchNavigator
*    - AuthenticationScreen
*    - OnboardScreen
*    - TermsAndConditionsScreen
*    - HomeScreenNavigation
*          - HomeScreen - HomeScreenStackNavigator(needed for header and to change the header based on the tab)
*            - HomeScreenTabNavigator
*              - Tab 1 - HomeStack
*              - Tab 2 - FavouritesStack
*              - Tab 3 - NotificationsStack
*              - Tab 4 - ProfileStack
*            - Any files you don't want to be a part of the Tab Navigator can go here.
*/


const AppSwitchNavigator = createSwitchNavigator(
  {
    Authentication: { screen: AuthenticationScreen }, // AUthentication Screen
    Onboarding: { screen: OnboardingScreen }, // Onboarding Screens
    TermsAndConditions: { screen: TermsAndConditionsScreen }, // TermsAndConditions Screen
    Home: { screen: HomeScreenNavigation }  // Home SCreen navigation
  },
  {
    initialRouteName: "Authentication"
  }
);

export const Navigation = createAppContainer(AppSwitchNavigator);
