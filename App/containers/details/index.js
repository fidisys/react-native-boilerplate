import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailsScreens extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Details</Text>
        <Button
          onPress={() => this.props.navigation.pop()}
          title="go Back"></Button>
      </View>
    );
  }
}
