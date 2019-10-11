import React, {PureComponent} from 'react';
import {View, Text,Image, Button, StyleSheet} from 'react-native';
import NavigationService from '../../utils/navigationService';
import storageService from '../../utils/storageService';
import { connect } from 'react-redux';
import * as loginActions from './actions';
import { wrapTheme } from '../../theme/themeProvider';

class Login extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    const { theme } = this.props;
    return (
      <View
        style={{
          flex: 1,
          padding: 30,
          backgroundColor: theme.backgroundColor,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Image style={[style.image]}
          source={require('../../assets/images/fidisys.png')}></Image>
          <Text style={[style.title]}>A React-Native Boilerplate with redux,saga and react navigation</Text>
        <Button
        style={[style.button]}
          onPress={() => {
           this.props.login({token: '12345'});
            
          }}
          title="Login"></Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
	return {
		...state
	};
};
const mapDispatchToProps = dispatch => {
	return {
		login: loginData => dispatch(loginActions.login(loginData))
	};
};

const LoginScreen = wrapTheme(Login)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);

export const style = StyleSheet.create({
  image:{
    width: 300,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#754abc'
  },
  button: {
    backgroundColor: 'green'
  }
})