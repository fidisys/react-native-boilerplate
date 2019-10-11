import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyle } from '../../theme/global';
import {
  Container, Header, Content, HeaderBody,
  HeaderRight,
  HeaderLeft, Button
} from '../../components/index';

export default class AboutScreen extends PureComponent {

  render() {
    const images = [
      'https://cdn.dribbble.com/users/4103091/screenshots/7353178/media/6d1a3a06961c0dcfd513ffe241636472.png',
      'https://cdn.dribbble.com/users/4103091/screenshots/7154300/media/7839c89716a90284e0c52595efb61dd5.jpg',
      'https://cdn.dribbble.com/users/4103091/screenshots/7144043/media/d656c920c640137820705cb7f2c74b8d.png',
      'https://cdn.dribbble.com/users/4103091/screenshots/7161471/media/5a8d8a0ca7ef17438d3abb153f65964a.png',
      'https://cdn.dribbble.com/users/4103091/screenshots/7182137/media/e62354aab046eaa95906378326401ae3.jpg',
      'https://cdn.dribbble.com/users/4103091/screenshots/7206198/media/3abe7e52b17db092707f8571acdc1692.jpg',
      'https://cdn.dribbble.com/users/4103091/screenshots/7206610/media/ffb593de453a0ec31a07d87032d874bb.jpg'
    ]
    return (
      <Container>
        <Header
          barStyle="dark-content"
          statusbarColor="white">
          <HeaderLeft />
          <HeaderBody>
            <Text style={[GlobalStyle.headerTitle]}>About</Text>
          </HeaderBody>
          <HeaderRight />
        </Header>
        <Content>
          <View style={{
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
            <Text style={style.title}>About Screen</Text>

            <Button
              style={{ backgroundColor: 'green' }}
              onClick={() => this.props.navigation.push('details')}>
              <Text style={{ color: 'white' }}>Details Screen</Text>
            </Button>
          </View>

          {images.map((image, index) => (
            <View key={index} style={style.imageContainer}>
              <Image style={style.image}
              loadingIndicatorSource={require('../../assets/icons/pre-loader.gif')}
              defaultSorce={require('../../assets/icons/pre-loader.gif')}
                source={{ uri: image }}
              />
            </View>
          ))}
        </Content>

      </Container>
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  imageContainer: {
    height: 250,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    backgroundColor: 'white',
    elevation: 9,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 5,
  }
})