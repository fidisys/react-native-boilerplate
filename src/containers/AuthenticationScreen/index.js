import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Icon } from 'native-base'
import SplashScreen from 'react-native-splash-screen';
import { styles } from './styles';

export class AuthenticationScreen extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Authentication Screen</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Onboarding')}
        />
      </View>
    );
  }
}
