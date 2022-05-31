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
  infoContainer: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: 'gold',
  },
})
const RestaurantItem = ({ restaurant }) => (
  <View style={[styles.elevation, styles.container]}>
    <Image source={{ uri: restaurant.image_url }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.header}>{restaurant.name}</Text>
      <View style={styles.info}>
        <Text style={styles.rating}>{restaurant.rating}</Text>
        <Text style={styles.money}>{restaurant.price}</Text>
      </View>
    </View>
  </View>
)

export default RestaurantItem
