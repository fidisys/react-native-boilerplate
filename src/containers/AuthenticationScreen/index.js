import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as AuthActions from './actions';
import { AsyncStorage, ActivityIndicator } from 'react-native';

class AuthenticationScreen extends Component {
	constructor() {
		super();
		this.state = {
			showLogin: false,
		};
		this._storageAsync();
	}
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		const { onUserLogin } = this.props;
		return (
			<View style={styles.centerWrapper}>
				{this.state.showLogin && <Text>Authentication Screen</Text>}
				{this.state.showLogin? (
					<Button
						title="Login"
						onPress={() =>
							onUserLogin({
								email: 'email@xyz.com',
								password: 'password',
							})
						}
					/>
				) : <ActivityIndicator />}
			</View>
		);
	}
	_storageAsync = async () => {
		const userToken = await AsyncStorage.getItem('api-key');
		console.log(userToken)
		if (userToken) {
			this.props.navigation.navigate('Home');
		} else {
			this.setState({
				showLogin: true,
			});
			this.props.navigation.navigate('AuthenticationScreen');
		}
	};
}
const mapStateToProps = state => {
	const { Auth } = state;
	return {
		fetching: Auth.fetching,
		auth: Auth.auth,
		error: Auth.error,
		loggedIn: Auth.loggedIn,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onUserLogin: loginData => dispatch(AuthActions.LOGIN(loginData)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthenticationScreen);
