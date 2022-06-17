import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import useRestaurant from '../hooks/useRestaurant'

const RestaurantScreen = ({ navigation }) => {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant()
  const id = navigation.getParam('id')
  console.log('id', id)
  useEffect(() => {
    searchRestaurant(id)
  }, [])

  if (loading) return <Text>Loading...</Text>

  if (error) return <Text>{error}</Text>

  if (data && data.photos) {
    return (
      <View>
        <FlatList
          data={data.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ height: 200, width: 200 }} />
          )}
        />
        <Text>Restaurant {id}</Text>
      </View>
    )
  }
  return null
}

export default RestaurantScreen
