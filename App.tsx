import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View } from 'react-native'
import Categories from './src/components/Categories'

import Header from './src/components/Header'
import Search from './src/components/Search'
import { commonCategories } from './src/db/common-categories'

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
