import React from 'react';
import { createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeTab from './TabNavigation/HomeTab';
import { FavouritesTab } from './TabNavigation/FavouritesTab';
import { NotificationsTab } from './TabNavigation/NotificationsTab';
import { ProfileTab } from './TabNavigation/ProfileTab';
import { DetailScreen } from '../DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SidemenuScreen from '../SidemenuScreen/index';

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
			screen: DetailScreen,
		},
	},
	{
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
);

const HomeScreenTabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeStack,
		},
		Favourites: {
			screen: FavouritesTab,
		},
		Notifications: {
			screen: NotificationsTab,
		},
		Profile: {
			screen: ProfileTab,
		},
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `md-home`;
				} else if (routeName === 'Favourites') {
					iconName = `md-heart`;
				} else if (routeName === 'Notifications') {
					iconName = `md-notifications`;
				} else if (routeName === 'Profile') {
					iconName = `md-person`;
				}

				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Icon name={iconName} size={focused ? 26 : 22} color={tintColor} />;
			},
			header: null,
			tabBarLabel: navigation.state.routeName,
			title: navigation.state.routeName,
		}),
		initialRouteName: 'Home',
		tabBarOptions: {
			activeTintColor: 'white',
			labelStyle: {
				fontSize: 12,
				fontWeight: '400',
				paddingBottom: 2,
			},
			style: {
				backgroundColor: '#23001f',
			},
			inActiveTintColor: '#8e898e',
		},
	}
);

export const HomeScreenNavigation = createDrawerNavigator(
	{
		Home: { screen: HomeScreenTabNavigator },
	},
	{
		headerMode: 'none',
		contentComponent: SidemenuScreen,
		drawerPosition: 'left',
	}
);
