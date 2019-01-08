import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Icon } from 'native-base'
import { styles } from './styles';

export class AuthenticationScreen extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Authentication Screen</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
