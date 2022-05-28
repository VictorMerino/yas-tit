import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryItem from './src/components/CategoryItem'
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
      <Search setTerm={(term: string) => setActiveItem(term)} />
      <FlatList
        // style={{ marginHorizontal: 20 }}
        data={commonCategories}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            image={item.image}
            index={index}
            isLastItem={index === commonCategories.length - 1}
            isActive={item.name === activeItem}
            handlePress={() => setActiveItem(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={category => category.name}
      />
      <StatusBar />
    </View>
  )
}

export default App
