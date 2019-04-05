import React, { Component } from 'react';
import { Navigation } from './Navigation';
import NavigationService from './services/navigationService';
import store from './store/configureStore';
import { Root } from 'native-base';
import { Provider } from 'react-redux';

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
};
export default App;
