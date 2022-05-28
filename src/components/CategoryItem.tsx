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
const CategoryItem = ({ name, image }: { name: String; image: any }) => {
  return (
    <>
      <View style={[styles.container, styles.elevation, styles.center]}>
        <View style={[styles.imageContainer, styles.center]}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.bold}>{name}</Text>
      </View>
    </>
  )
}

export default CategoryItem
