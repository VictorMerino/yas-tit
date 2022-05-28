import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import Search from './components/Search'

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
      <StatusBar />
    </View>
  )
}

export default App
