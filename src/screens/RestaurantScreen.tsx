import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import useRestaurant from '../hooks/useRestaurant'

const RestaurantScreen = ({ navigation }) => {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant()
  const id = navigation.getParam('id')

  useEffect(() => {
    searchRestaurant(id)
  }, [])

  console.log({ data, loading, error })
  return (
    <View>
      <Text>Restaurant {id}</Text>
    </View>
  )
}

export default RestaurantScreen
