import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './AppNavigator'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers';

class HomeScreen extends Component {
  render() {
    return (
      // <LinearGradient colors={['#2b5876', '#4e4376']} style={styles.linearGradient}>
      // </LinearGradient>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    )
  }
}

class SummaryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Summary!</Text>
      </View>
    )
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    const store = createStore(reducers)
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}