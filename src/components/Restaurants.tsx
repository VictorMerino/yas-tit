import { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import useRestaurants from '../hooks/useRestaurants'

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  header: {
    fontWeight: 'bold',
  },
})
const Restaurants = ({ term }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants()

  useEffect(() => {
    searchRestaurants(term)
  }, [term])

  console.log({ data, loading, error })

  if (loading) return <ActivityIndicator size="large" />
  if (error)
    return (
      <View style={styles.container}>
        <Text style={[styles.header, { color: 'red' }]}>
          Something went wrong
        </Text>
      </View>
    )
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  )
}

export default Restaurants
