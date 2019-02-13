import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Icon } from 'native-base'
import SplashScreen from 'react-native-splash-screen';
import { styles } from './styles';

export class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Onboarding Screen</Text>
        <Button
          title="Done"
          onPress={() => this.props.navigation.navigate('TermsAndConditions')}
        />
      </View>
    );
  }
}
