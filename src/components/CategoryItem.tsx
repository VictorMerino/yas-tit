import { Image, StyleSheet, Text, View } from 'react-native'
import { elevation } from '../styles/elevation'
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
})
const CategoryItem = () => {
  return (
    <>
      <View style={[styles.container, styles.elevation]}>
        <Image
          source={require(`../assets/images/burger.png`)}
          style={styles.image}
        />
        <Text>Burguer</Text>
      </View>
    </>
  )
}

export default CategoryItem
