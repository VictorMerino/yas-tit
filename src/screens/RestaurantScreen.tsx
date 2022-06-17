import { Text, View } from 'react-native'

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  return (
    <View>
      <Text>Restaurant {id}</Text>
    </View>
  )
}

export default RestaurantScreen
