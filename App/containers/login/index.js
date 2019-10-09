import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import NavigationService from '../../utils/navigationService';
import storageService from '../../utils/storageService';

export default class LoginScreen extends PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Login</Text>
        <Button
          onPress={() => {
            storageService.setApiKey('12345');
            NavigationService.navigate('Home');
          }}
          title="click"></Button>
      </View>
    );
  }
}
