import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class ProfileScreen extends PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Profile</Text>
      </View>
    );
  }
}
