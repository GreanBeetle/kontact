import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'

const ListScreen = () => {
  return (
    <SafeAreaView>
      <View style={STYLES.standard}>
        <Text>
          List Screen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ListScreen