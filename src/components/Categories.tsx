import { FlatList, View } from 'react-native'
import CategoryItem from './CategoryItem'

export interface Item {
  name: String
  image: String
}
interface Category {
  categories: []
  activeItem: Item
  setCategory: Function
}
const Categories = ({ categories, activeItem, setCategory }: Category) => (
  <View>
    <FlatList
      // style={{ marginHorizontal: 20 }}
      data={categories}
      renderItem={({ item, index }) => (
        <CategoryItem
          name={item.name}
          image={item.image}
          index={index}
          isLastItem={index === categories.length - 1}
          isActive={item.name === activeItem}
          handlePress={() => setCategory(item.name)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={category => category.name}
    />
  </View>
)

export default Categories
