import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/HomeScreen'
import Restaurant from './src/screens/RestaurantScreen'

const navigator = createStackNavigator(
  {
    Home,
    Restaurant,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'BussinessSearch',
    },
  }
)

export default createAppContainer(navigator)
