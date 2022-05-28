import { StatusBar } from 'expo-status-bar'
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
let activeItem = 'burger'
const styles = StyleSheet.create({
  container: {
    /* flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec', */
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
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
