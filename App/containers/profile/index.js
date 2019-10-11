import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import { Container, Header, Content,HeaderBody,
  HeaderRight,
  HeaderLeft } from '../../components/index';
  import {GlobalStyle} from '../../theme/global';

export default class ProfileScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Header 
        barStyle="dark-content"
        statusbarColor="white">
          <HeaderLeft />
          <HeaderBody>
            <Text style={[GlobalStyle.headerTitle]}>Profile</Text>
          </HeaderBody>
          <HeaderRight/>
        </Header>
        <Content>
        <Text>Profile Screen</Text>
        </Content>
        
      </Container>
    );
  }
}
