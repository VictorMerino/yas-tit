import { Image, Text, View } from 'react-native'

const RestaurantItem = ({ restaurant }) => (
  <View>
    <Image source={{ uri: restaurant.image_url }} />
    <View>
      <Text>{restaurant.name}</Text>
      <View>
        <Text>{restaurant.rating}</Text>
        <Text>{restaurant.price}</Text>
      </View>
    </View>
  </View>
)

export default RestaurantItem
