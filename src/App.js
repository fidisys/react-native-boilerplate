/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet } from 'react-native';
 import {
   createSwitchNavigator,
   createAppContainer,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
 } from "react-navigation";
 import { HomeScreen } from './containers/HomeScreen';
 import { AuthenticationScreen } from './containers/AuthenticationScreen';
 import { HomeTab } from './containers/TabNavigation/HomeTab';
 import { FavouritesTab } from './containers/TabNavigation/FavouritesTab';
 import { NotificationsTab } from './containers/TabNavigation/NotificationsTab';
 import { ProfileTab } from './containers/TabNavigation/ProfileTab';
 import { DetailScreen } from './containers/DetailScreen';
 import Icon from 'react-native-vector-icons/Ionicons';

 /**
 * - AppSwitchNavigator
 *    - AuthenticationScreen
 *      - Login Button
 *    - AppDrawerNavigator
 *          - HomeScreen - HomeScreenStackNavigator(needed for header and to change the header based on the                     tab)
 *            - HomeScreenTabNavigator
 *              - Tab 1 - HomeStack
 *              - Tab 2 - FavouritesStack
 *              - Tab 3 - NotificationsStack
 *              - Tab 4 - ProfileStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

 export default class App extends React.Component {
   render() {
     return <AppContainer />;
   }
 }

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
     navigationOptions: ({ navigation }) => {
       const { routeName } = navigation.state.routes[navigation.state.index];
       return {
         header: null,
         headerTitle: routeName
       };
     }
   }
 );

 const HomeScreenStackNavigator = createStackNavigator(
   {
     HomeScreenTabNavigator: HomeScreenTabNavigator
   },
   {
     defaultNavigationOptions: ({ navigation }) => {
       return {
         headerLeft: (
           <Icon
             style={{ paddingLeft: 10 }}
             onPress={() => navigation.openDrawer()}
             name="md-menu"
             size={30}
           />
         ),
         headerRight: (
           <Icon
             style={{ paddingRight: 10 }}
             name="md-settings"
             size={30}
           />
         )
       };
     }
   }
 );

 const AppDrawerNavigator = createDrawerNavigator({
   Home: { screen: HomeScreenStackNavigator }
 });

 const AppSwitchNavigator = createSwitchNavigator(
   {
     Authentication: { screen: AuthenticationScreen },
     Home: { screen: AppDrawerNavigator }
   },
   {
     initialRouteName: "Authentication"
   }
 );

const AppContainer = createAppContainer(AppSwitchNavigator);
