import { StyleSheet } from 'react-native';
import React from 'react';

import { Platform, Dimensions, PixelRatio } from 'react-native';


export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const platform = Platform.OS;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const isIphoneX =
platform === Platform.OS === 'ios' &&
(deviceHeight === 812 ||
  deviceWidth === 812 ||
  deviceHeight === 896 ||
  deviceWidth === 896);
export const BarStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';

export const GlobalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  headerTitle: {
    fontSize: isAndroid ? 18 : 16,
    color: 'white'
  }
})