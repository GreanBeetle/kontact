import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  KONTACT_LIST_ITEM_STYLES as styles
} from '../styles'

const KontactListItem = ({ item }) => {
  console.log('item', item) // REMOVE
  return (
    <Pressable style={styles.item} onPress={() => console.log(`item id is ${item.id}`)}>
      <View>
        <Text style={STYLES.normalText}>{item.name}</Text>
        <Text style={STYLES.smallText}>{item.email}</Text>
      </View>
    </Pressable>
  )
}

export default KontactListItem
 