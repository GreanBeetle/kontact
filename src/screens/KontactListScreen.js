import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { 
  GLOBAL_STYLES as STYLES,
  KONTACT_LIST_SCREEN_STYLES as styles 
} from '../styles'
import { connect } from 'react-redux'
import { getKontacts } from '../redux/actions'
import FONTS from '../fonts'
import { kontactListScreenCopy as COPY } from '../copy'

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

  const defaultView = (
    <Text style={{
      fontSize: 24,
      fontFamily: FONTS.montserrat
    }}>
      HEADER
    </Text>
  )

  const isGettingView = <Text style={STYLES.normalText}>{COPY.isGettingView}</Text>
  
  const errorView = ( 
    <View>
      <View>
        <Text style={[STYLES.subHeaderText, STYLES.red]}>{COPY.errorViewHeader}</Text>
      </View>
      <View>
        <Text style={STYLES.normalText}>{errorMessage}</Text>
      </View>
    </View>
  )
   
  

  
  // if (errorMessage) show errorView with retry button and don't retry
  // if (isGetting = true and !errorMessage) show "retrieving kontacts"
  // if (kontacts.length > 0 && !errorMessage && !isGetting) show kontactListView
  // else show defaultLogoView with retrieve contacts button 
  
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        {content}
        {isGettingView}
        {errorView}
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
