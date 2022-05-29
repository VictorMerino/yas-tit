import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View } from 'react-native'
import Categories from './src/components/Categories'

import Header from './src/components/Header'
import Search from './src/components/Search'

const commonCategories = [
  {
    name: 'burger',
    image: require(`./src/assets/images/burger.png`),
  },
  {
    name: 'pizza',
    image: require(`./src/assets/images/pizza.png`),
  },
  {
    name: 'pasta',
    image: require(`./src/assets/images/pasta.png`),
  },
  {
    name: 'steak',
    image: require(`./src/assets/images/steak.png`),
  },
  {
    name: 'cake',
    image: require(`./src/assets/images/cake.png`),
  },
  {
    name: 'smoothies',
    image: require(`./src/assets/images/smoothies.png`),
  },
]

const App = () => {
  const [activeItem, setActiveItem] = useState('Burguer')
  return (
    <View>
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
      <StatusBar />
    </View>
  )
}

export default App
