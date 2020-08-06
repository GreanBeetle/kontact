import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'

const KontactDetailScreen = () => {
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        <Text>
          Kontact Screen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default KontactDetailScreen