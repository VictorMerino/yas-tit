import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
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

export interface Restaurant {
  image_url: string
  name: string
  rating: string
  price: string
}
const RestaurantItem = ({ restaurant, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
    <View style={[styles.elevation, styles.container]}>
      <Image
        source={
          restaurant.image_url
            ? { uri: restaurant.image_url }
            : require('../assets/images/adaptive-icon.png')
        }
        style={styles.image}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.money}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

export default withNavigation(RestaurantItem)
