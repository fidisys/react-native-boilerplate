import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export class HomeTab extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      ),
      headerRight: (
        <Icon
          style={{ paddingRight: 10 }}
          name="md-settings"
          size={30}
        />
      )
    };
  }
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Home tab!</Text>
        <Button title="Go To Detail Screen" onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}
