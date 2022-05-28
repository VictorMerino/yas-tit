import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
    marginTop: 60,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: 'bold',
  },
})
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>Delicious meal</Text>
    </View>
  )
}

export default Header
