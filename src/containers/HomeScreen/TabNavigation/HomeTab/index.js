import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { connect } from 'react-redux';
import { injectAsyncReducer } from '../../../../store/configureStore';
import { userReducer } from './reducers';
import { injectSaga } from 'redux-sagas-injector';
import { watcherSaga as userSagas } from './sagas';
import { getUsers } from './actions';

class HomeTab extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
			),
			headerRight: <Icon style={{ paddingRight: 10 }} name="md-settings" size={30} />,
		};
	};
	render() {
		return (
			<View style={styles.centerWrapper}>
				<Text>Home tab Screen!</Text>
				<Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Details')} />
			</View>
		);
  }
  componentDidMount() {
    this.props.loadUsers();
  }
}

const mapStateToProps = state => {
	console.log('state', state);
	return {
		...state,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		loadUsers: () => dispatch(getUsers()),
	};
};
injectAsyncReducer('users', userReducer);
injectSaga('users_saga', userSagas);
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeTab);
