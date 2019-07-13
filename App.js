import React, { Component } from 'react';

import AppNavigator from './AppNavigator'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers';


export default class App extends Component {
  render() {
    const store = createStore(reducers)
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}