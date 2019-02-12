import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Icon } from 'native-base'
import SplashScreen from 'react-native-splash-screen';
import { styles } from './styles';

export class TermsAndConditionsScreen extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Terms & Conditions Screen</Text>
        <Button
          title="Accepted"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
