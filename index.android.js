import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/app';

export default class tsWithTransformer extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('tsWithTransformer', () => tsWithTransformer);
