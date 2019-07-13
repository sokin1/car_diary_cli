import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Calendar from './Components/Calendar'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state
    let IconComponent = MaterialCommunityIcons
    let iconName
    if(routeName === 'Home') {
      iconName = 'home'
    } else if(routeName === 'Settings') {
      iconName = 'settings'
    } else if(routeName ==='Calendar') {
      iconName = 'calendar-edit'
    } else if(routeName === 'Summary') {
      iconName = 'file-document'
    }
  
    return <IconComponent name={iconName} size={25} color={tintColor} />
}

const RootNavigator = createBottomTabNavigator(
    {
      Home: HomeScreen,
      Settings: SettingsScreen,
      Calendar: Calendar,
      Summary: SummaryScreen
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => 
          getTabBarIcon(navigation, focused, tintColor)
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    }
)

export default createAppContainer(RootNavigator)