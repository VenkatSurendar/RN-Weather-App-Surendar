/* eslint-disable no-undef */
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import {StyleSheet} from 'react-native';
// import { Provider } from 'react-redux';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
