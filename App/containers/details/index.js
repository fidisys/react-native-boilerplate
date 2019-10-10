import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import { Container, Header, Content } from '../../components/index';

export default class DetailsScreens extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
         <Header 
        barStyle="dark-content"
        statusbarColor="white">
          <Button
          onPress={() => this.props.navigation.pop()}
          title="go Back"></Button>
          <Text>Details</Text>
        </Header>
        
      </Container>
    );
  }
}
