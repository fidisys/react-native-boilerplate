import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const setApiKey = key => {
  AsyncStorage.setItem('api_key', key);
};

const getApiKey = async () => {
  try {
    const apiKey = await AsyncStorage.getItem('api_key');
    return apiKey;
  } catch (error) {
    return error;
  }
};

export default {
  setApiKey,
  getApiKey,
};
