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
   * @param {object} kontact 
   */
  const navigateToKontactDetail = async kontact => {
    try {
      await setSelectedKontact(kontact)
      navigation.push('Kontact')
    } catch (error) {
      console.log('navigate to kontact detail error', error) // FIX 
    }
  }

  let content

  const defaultView = <Text style={STYLES.subHeaderText}>example default text</Text>
  
  const isGettingView = <Text style={STYLES.normalText}>{COPY.isGettingView}</Text>
  
  const errorView = ( // CLEAN UP THIS CLUMSY JSX
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
      renderItem={({ item }) => <KontactListItem item={item} onPress={ () => navigateToKontactDetail(item)}/> }
    />
  )
   
  if (errorMessage) content = errorView
  else if (isGetting && !errorMessage) content = isGettingView
  else if (!isGetting && !errorMessage && kontacts.length > 0) content = kontactListView
  else content = defaultView 
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
