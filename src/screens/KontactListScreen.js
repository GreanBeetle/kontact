import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { connect } from 'react-redux'
import { getKontacts } from '../redux/actions'

const KontactListScreen = ({ navigation }) => {
  
  useEffect(() => {
    console.log('component did mount')
    // add getKontacts call here 
  }, [])
  
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        <Text>
          List Screen 
          {/* CHANGE THIS TEXT! */}
        </Text>
      </View>

      {/* TEMPORARY BUTTON CODE */}
      <TouchableOpacity onPress={() => navigation.push('Kontact')} style={STYLES.standard}>
        <View style={STYLES.button}>
          <Text style={STYLES.buttonText}>GO</Text>
        </View>
      </TouchableOpacity>
      {/* TEMPORARY BUTTON CODE */}

    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  const { isGetting, errorMessage, kontacts } = state 
  return { isGetting, errorMessage, kontacts }
}

export default connect(mapStateToProps, { getKontacts })(KontactListScreen)