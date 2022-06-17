import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Restaurants from '../components/Restaurants'
import Search from '../components/Search'
import { commonCategories } from '../db/common-categories'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
})
const HomeScreen = () => {
  const [activeItem, setActiveItem] = useState('Burguer')
  return (
    <View style={styles.container}>
      <Header />
      <Search
        setTerm={(term: string) => setActiveItem(term)}
        activeItem={activeItem}
      />
      <Categories
        categories={commonCategories}
        activeItem={activeItem}
        setCategory={setActiveItem}
      />
      <Restaurants term={activeItem} />
      <StatusBar />
    </View>
  )
}

export default HomeScreen
