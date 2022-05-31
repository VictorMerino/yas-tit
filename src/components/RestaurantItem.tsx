import { Image, StyleSheet, Text, View } from 'react-native'
import { elevation } from '../styles/elevation'
const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: '#fff',
    height: 100,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginHorizontal: 10,
  },
})
const RestaurantItem = ({ restaurant }) => (
  <View style={[styles.elevation, styles.container]}>
    <Image source={{ uri: restaurant.image_url }} style={styles.image} />
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
