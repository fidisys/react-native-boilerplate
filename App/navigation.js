import React, { PureComponent } from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './containers/login/index';
import AboutScreen from './containers/about/index';
import ProfileScreen from './containers/profile/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { SidemenuScreen } from './containers/sideMenu/index.js';
import { View, Text, Image } from 'react-native';
import NavigationAction from './utils/navigationService';
import storageService from './utils/storageService';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import DetailsScreens from './containers/details/index'


const AboutStackNavigator = FluidNavigator(
  {
    about: AboutScreen,
    details: DetailsScreens,
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: navigation.state.routes.length > 1 ? false : true,
      };
    }
  },
);

const ProfileStackNavigator = FluidNavigator(
  {
    profile: ProfileScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: navigation.state.routes.length > 1 ? false : true,
      };
    },
  },
);

const TabBarNavigator = createBottomTabNavigator(
  {
    about: AboutStackNavigator,
    profile: ProfileStackNavigator,
  },
  {
    initialRouteName: '',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'about') {
          iconName = `ios-notifications`;
        } else if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'profile') {
          iconName = `ios-people`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon
            name={iconName}
            size={focused ? 26 : 22}
            color={tintColor}
          />
        );
      },
      header: null,
      tabBarLabel: navigation.state.routeName,
      title: navigation.state.routeName,
    }),
    tabBarOptions: {
      activeTintColor: 'red'
    }
  },
);

class LoadingScreen extends PureComponent {
  constructor(props) {
    super(props);
    this._bootstrap();
    console.ignoredYellowBox = ['Warning: `-[RCTRootView cancelTouches]`'];
  }
  async _bootstrap() {
    const apiKey = await storageService.getApiKey();
    NavigationAction.navigate(apiKey ? 'App' : 'Authentication');
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{
          width: 300,
          height: 100,
          resizeMode: 'cover',
          marginBottom: 80,
        }}
          source={require('./assets/images/fidisys.png')}></Image>
        <Text>loading...</Text>
      </View>
    );
  }
}

export const appDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: TabBarNavigator },
  },
  {
    drawerPosition: 'left',
    headerMode: 'none',
    drawerType: 'slide',
    contentComponent: SidemenuScreen,
  },
);

const SwitchNavigation = createAnimatedSwitchNavigator(
  {
    loading: LoadingScreen,
    App: appDrawerNavigator,
    Authentication: LoginScreen,
  },
  {
    initialRouteName: 'loading',
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export const Navigation = createAppContainer(SwitchNavigation);
