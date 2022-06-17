import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'BussinessSearch',
    },
  }
)

export default createAppContainer(navigator)
