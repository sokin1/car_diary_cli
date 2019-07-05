import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'

import CalendarScreen from './CalendarScreen'
import NewEntryScreen from './NewEntryScreen'

export default AppContainer = createStackNavigator(
    {
        Calendar: CalendarScreen,
        NewEntry: {
            screen: NewEntryScreen,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.params.date
            })
        }
    },
    {
        initialRouteName: 'Calendar'
    }
)