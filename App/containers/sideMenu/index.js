import React, {PureComponent} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { StyleSheet, Text } from 'react-native';
import {
  Container, Header, Content, HeaderBody,
  HeaderRight,Footer,
  HeaderLeft, Button
} from '../../components/index';
import { GlobalStyle } from '../../theme/global';
import store from '../../store/configureStore';
import *  as loginTypes from '../login/types';

export class SidemenuScreen extends PureComponent {
  constructor(props) {
    super(props)
    console.log(props)

  }

  onLogOut() {
    store.dispatch({
      type: loginTypes.LOGOUT
    });
  }
  render() {
  return (
    <Container>
      <Header
        barStyle="dark-content"
        statusbarColor="white">
        <HeaderLeft />
        <HeaderBody>
          <Text style={[GlobalStyle.headerTitle]}>Boilerplate</Text>
        </HeaderBody>
        <HeaderRight />
      </Header>
      <Content>
      </Content>
      <Footer>
      <Button 
      onClick={()=> this.onLogOut()}
      style={{backgroundColor: 'red'}}>
           <Text style={{color:'white'}}>Logout</Text>
         </Button>
      </Footer>
    </Container>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
