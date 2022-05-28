import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../styles/elevation'
import { useState } from 'react'
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 25,
    padding: 6,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 40,
  },
  elevation,
  textInput: {
    fontSize: 20,
    marginLeft: 12,
  },
})
const Search = ({ setTerm }: { setTerm: Function }) => {
  const [input, setInput] = useState('')
  const handleEndEditing = () => {
    if (!input) return
    setTerm(input)
  }
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder="Search here"
        style={styles.textInput}
        onChangeText={text => {
          setInput(text)
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  )
}

export default Search
