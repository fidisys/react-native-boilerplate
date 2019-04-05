import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>DetailScreen!</Text>
      </View>
    );
  }
}
