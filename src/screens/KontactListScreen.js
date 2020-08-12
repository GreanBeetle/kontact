import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { connect } from 'react-redux'
import { getKontacts } from '../redux/actions'
import FONTS from '../fonts'

const KontactListScreen = ({ navigation, isGetting, errorMessage, kontacts, getKontacts }) => {

  /**
   * useEffect hook that functions like componentDidMount
   * here we use it to dispatch the getKontacts() API call 
   */
  useEffect(() => {
    getKontacts() 
  }, [])

  let content = (
    <Text style={{
      fontSize: 24,
      fontFamily: FONTS.montserrat}}>
        HEADER
    </Text>
  )
  
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        {content}
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
  const { isGetting, errorMessage, kontacts } = state.getKontacts 
  return { isGetting, errorMessage, kontacts }
}

export default connect(mapStateToProps, { getKontacts })(KontactListScreen)
