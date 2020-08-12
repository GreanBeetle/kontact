import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'

const KontactListItem = ({ item }) => {
  console.log('item', item)
  return (
      <Pressable onPress={() => console.log(`item id is ${item.id}`)}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </Pressable>
  )
}

export default KontactListItem
 