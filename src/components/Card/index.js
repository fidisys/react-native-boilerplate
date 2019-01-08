import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class Card extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Card {this.props.name}!</Text>
      </View>
    );
  }
}
