import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

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