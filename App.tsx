import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CategoryItem from './src/components/CategoryItem'
import Header from './src/components/Header'
import Search from './src/components/Search'

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
      <CategoryItem
        name="burger"
        image={require(`./src/assets/images/burger.png`)}
      />
      <CategoryItem
        name="pizza"
        image={require(`./src/assets/images/pizza.png`)}
      />
      <CategoryItem
        name="steak"
        image={require(`./src/assets/images/steak.png`)}
      />
      <CategoryItem
        name="cake"
        image={require(`./src/assets/images/cake.png`)}
      />
      <CategoryItem
        name="smoothies"
        image={require(`./src/assets/images/smoothies.png`)}
      />
      <StatusBar />
    </View>
  )
}

export default App
