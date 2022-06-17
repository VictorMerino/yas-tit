import { useEffect, useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
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
    const dimensions = Dimensions.get('window')
    return (
      <View>
        <Text style={{ margin: 5 }}>{data.name} photos:</Text>
        <FlatList
          data={data.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                height: (dimensions.width * 9) / 16,
                width: dimensions.width,
              }}
            />
          )}
        />
      </View>
    )
  }
  return null
}

export default RestaurantScreen
