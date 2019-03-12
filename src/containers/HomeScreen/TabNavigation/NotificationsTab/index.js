import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base'
import { styles } from './styles';

export class NotificationsTab extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Notifications Tab!</Text>
      </View>
    );
  }
}
