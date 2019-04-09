import React, { Component } from 'react';
import { Navigation } from './Navigation';
import NavigationService from './services/navigationService';
import store from './store/configureStore';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Root>
					<Navigation
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</Root>
			</Provider>
		);
	}
	componentDidMount() {
		SplashScreen.hide();
	}
};
export default App;
