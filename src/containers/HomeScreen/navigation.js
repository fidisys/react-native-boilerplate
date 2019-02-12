import React from 'react'
import {
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { HomeScreen } from './index';
import { HomeTab } from './TabNavigation/HomeTab';
import { FavouritesTab } from './TabNavigation/FavouritesTab';
import { NotificationsTab } from './TabNavigation/NotificationsTab';
import { ProfileTab } from './TabNavigation/ProfileTab';
import { DetailScreen } from '../DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';

/**
*    - HomeScreenNavigation
*          - HomeScreen - HomeScreenStackNavigator(needed for header and to change the header based on the tab)
*            - HomeScreenTabNavigator
*              - Tab 1 - HomeStack
*              - Tab 2 - FavouritesStack
*              - Tab 3 - NotificationsStack
*              - Tab 4 - ProfileStack
*            - Any files you don't want to be a part of the Tab Navigator can go here.
*/

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeTab,
    },
    Details: {
      screen: DetailScreen
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const HomeScreenTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (<Icon name="md-home" style={{ color: tintColor }} size={25} />)
        }
      }
    },
    Favourites: {
      screen: FavouritesTab,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ tintColor }) => (<Icon name="md-heart" style={{ color: tintColor }} size={25} />)
        }
      }
    },
    Notifications: {
      screen: NotificationsTab,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ tintColor }) => (<Icon name="md-notifications" style={{ color: tintColor }} size={25} />)
        }
      }
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => (<Icon name="md-person" style={{ color: tintColor }} size={25} />)
        }
      }
    }
  },
  {
    tabBarOptions: {    // Navigation Options for Bottom Tab
      showLabel: true,
      showIcon: true
    }
  }
);

export const HomeScreenNavigation = createDrawerNavigator({
  Home: { screen: HomeScreenTabNavigator }
});
