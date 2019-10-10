import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {GlobalStyle} from '../../theme/global';
import { Container, Header, Content } from '../../components/index';

export default class AboutScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Header 
        barStyle="dark-content"
        statusbarColor="white">
          <Text>Header</Text>
        </Header>
        <Content>
        <Text>AboutScreen</Text>
        <Button
          onPress={() => this.props.navigation.push('details')}
          title="go to details"></Button>
        </Content>
        
      </Container>
    );
  }
}
