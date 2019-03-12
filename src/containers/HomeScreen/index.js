import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Icon } from 'native-base';
import { styles } from './styles';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}
