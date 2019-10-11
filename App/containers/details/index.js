import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import {
  Container,
  Header,
  Content,
  HeaderBody,
  HeaderRight,
  HeaderLeft,
  IconButton
} from '../../components/index';
import {GlobalStyle} from '../../theme/global';
import Icon from 'react-native-vector-icons/Ionicons';


export default class DetailsScreens extends PureComponent {
  constructor(props) {
    super(props);
  }
  goBack() {
    this.props.navigation.pop()
  }
  render() {
    return (
      <Container>
        <Header
          barStyle="dark-content"
          statusbarColor="white">
          <HeaderLeft>
            <IconButton buttonEvent={()=> this.goBack()}>
              <Icon size={22} color='white' name="md-arrow-back" />
            </IconButton>
          </HeaderLeft>
          <HeaderBody>
            <Text style={[GlobalStyle.headerTitle]}>Details</Text>
          </HeaderBody>
          <HeaderRight />
        </Header>
      <Content>
        <Text>This is details screen.</Text>
      </Content>
      </Container>
    );
  }
}
