import { StyleSheet, Text, View } from 'react-native'
import useRestaurants from '../hooks/useRestaurants'

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
  const [{ data, loading, error }, searchRestaurants] = useRestaurants()
  return (
    <View>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  )
}

export default Restaurants
