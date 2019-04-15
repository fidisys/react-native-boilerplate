// app/styles/base.js
import { StyleSheet, Platform, Dimensions } from 'react-native';


export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const platform = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios'
}
export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7'
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
}

export const general = StyleSheet.create({
  margin: {
    margin: 'auto',
    padding: 5
  },
  flex: {
    flex: 1
  }
})