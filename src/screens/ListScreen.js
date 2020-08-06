import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'

const ListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        <Text>
          List Screen
        </Text>
      </View>

      {/* TEMPORARY BUTTON CODE */}
      <TouchableOpacity onPress={() => navigation.push('Kontact')}>
        <View style={STYLES.button}>
          <Text style={STYLES.buttonText}>GO</Text>
        </View>
      </TouchableOpacity>
      {/* TEMPORARY BUTTON CODE */}

    </SafeAreaView>
  )
}

export default ListScreen