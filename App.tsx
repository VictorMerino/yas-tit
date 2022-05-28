import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is just a fukin Jelou Güorl</Text>
      <StatusBar />
    </View>
  )
}

export default App
