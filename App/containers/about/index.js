import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {GlobalStyle} from '../../theme/global';

export default class AboutScreen extends PureComponent {
  render() {
    return (
      <View style={[GlobalStyle.mainContainer]}>
        <Text>AboutScreen</Text>
        <Button
          onPress={() => this.props.navigation.push('details')}
          title="go to details"></Button>
      </View>
    );
  }
}
