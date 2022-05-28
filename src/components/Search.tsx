import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 25,
    padding: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.2,
    borderRadius: 40,
  },
  textInput: {
    fontSize: 20,
    marginLeft: 12,
  },
})
const Search = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={25} />
      <TextInput placeholder="Search here" style={styles.textInput} />
    </View>
  )
}

export default Search
