import React, { useEffect } from 'react'
import { 
  SafeAreaView, 
  View, 
  Text, 
  FlatList 
} from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { connect } from 'react-redux'
import { getKontacts, setSelectedKontact } from '../redux/actions'
import { kontactListScreenCopy as COPY } from '../copy'
import { KontactListItem } from '../components'

const KontactListScreen = ({ navigation, isGetting, errorMessage, kontacts, getKontacts, setSelectedKontact }) => {

  /**
   * useEffect hook that functions like componentDidMount
   * here we use it to dispatch the getKontacts() API call 
   */
  useEffect(() => {
    getKontacts() 
  }, [])

  /**
   * invokes setSelectedKontact action to set selected kontact in data store
   * navigates to KontactDetailScreen
   * NOTE * I DO NOT THINK THIS METHOD NEEDS TO BE ASYNCHRONOUS! 
   * @param {object} kontact 
   */
  const navigateToKontactDetail = async kontact => {
    try {
      await setSelectedKontact(kontact)
      navigation.push('Kontact')
    } catch (error) {
      console.log('navigate to kontact detail error', error)
    }
  }

  let content

  const defaultView = <Text style={STYLES.subHeaderText}>example default text</Text>
  
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
  
  const kontactListView = (
    <FlatList 
      data={kontacts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <KontactListItem item={item} onPress={navigateToKontactDetail}/> }
    />
  )
   
  if (errorMessage) content = errorView
  else if (isGetting && !errorMessage) content = isGettingView
  else if (!isGetting && !errorMessage && kontacts.length > 0) content = kontactListView
  else content = defaultView 
  /* <TouchableOpacity onPress={() => navigation.push('Kontact')} style={STYLES.standard}> */
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        {content}
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  const { isGetting, errorMessage, kontacts } = state.getKontacts
  return { isGetting, errorMessage, kontacts }
}

export default connect(mapStateToProps, { getKontacts, setSelectedKontact })(KontactListScreen)
