import { useEffect } from 'react'
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
const Restaurants = ({ term }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants()

  useEffect(() => {
    searchRestaurants(term)
  }, [term])

  console.log({ data, loading, error })

  if (loading) return <Text style={styles.container}>Loading...</Text>
  return (
    <View>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  )
}

export default Restaurants
