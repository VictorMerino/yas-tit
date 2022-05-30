import { StyleSheet, Text, View } from 'react-native'

import yelp from '../api/yelp'
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
})
const Restaurants = () => {
  const searchRestaurants = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 12,
          term: 'Dessert',
          location: 'Toronto',
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  searchRestaurants()
  return (
    <View>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  )
}

export default Restaurants
