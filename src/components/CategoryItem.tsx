import { Image, StyleSheet, Text, View } from 'react-native'
import { elevation } from '../styles/elevation'
import { center } from '../styles/center'
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: '#fff',
  },
  center,
  elevation,
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginBottom: 5,
  },
  image: {
    width: 35,
    height: 35,
  },
  bold: {
    fontWeight: 'bold',
  },
})
const CategoryItem = () => {
  return (
    <>
      <View style={[styles.container, styles.elevation, styles.center]}>
        <View style={[styles.imageContainer, styles.center]}>
          <Image
            source={require(`../assets/images/burger.png`)}
            style={styles.image}
          />
        </View>
        <Text style={styles.bold}>Burguer</Text>
      </View>
    </>
  )
}

export default CategoryItem
