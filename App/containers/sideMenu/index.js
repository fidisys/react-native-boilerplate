import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import {
  Container, Header, Content, HeaderBody,
  HeaderRight, Footer,
  HeaderLeft, Button
} from '../../components/index';
import { GlobalStyle } from '../../theme/global';
import store from '../../store/configureStore';
import *  as loginTypes from '../login/types';
import { wrapTheme } from '../../theme/themeProvider';
import storageService from '../../utils/storageService';


class Sidemenu extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: this.props.theme.key === 'Dark Mode' ? true : false
    }
  }

  onLogOut() {
    store.dispatch({
      type: loginTypes.LOGOUT
    });
  }
  onThemeChange() {
    this.props.setTheme(this.state.isDarkMode ? 'Light Mode' : 'Dark Mode');
    storageService.setThemeId(this.state.isDarkMode ? 'Light Mode' : 'Dark Mode');
    this.setState((prev) => ({ isDarkMode: !prev.isDarkMode }))
  }
  render() {
    const { isDarkMode } = this.state;
    const { theme } = this.props;
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
        <Content style={{
          backgroundColor: theme.backgroundColor
        }}>
          <Text style={{
            marginBottom: 40,
            color: theme.color,
            fontWeight: 'bold'
          }}>Switch Theme</Text>
          <View style={styles.switchContainer}>
            <Text style={{ color: theme.color,
            fontSize: isDarkMode ? 14 : 16,
            fontWeight: isDarkMode ? '100' : 'bold' }}>{'Light Mode'}</Text>
            <Switch
              onValueChange={() => this.onThemeChange()}
              value={isDarkMode} />
            <Text style={{ color: theme.color,
            fontSize: isDarkMode ? 16 : 14,
            fontWeight: isDarkMode ? 'bold' : '100' }}>{'Dark Mode'}</Text>
          </View>
        </Content>
        <Footer>
          <Button
            onClick={() => this.onLogOut()}
            style={{ backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>Logout</Text>
          </Button>
        </Footer>
      </Container>
    )
  }
}

export const SidemenuScreen = wrapTheme(Sidemenu);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});
