import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { GLOBAL_STYLES as STYLES } from '../styles'
import { connect } from 'react-redux'
import { setSelectedKontact } from '../redux/actions'

const KontactDetailScreen = ({ navigation, selectedKontact, setSelectedKontact }) => {
  const { address, company, email, id, name, phone, username, website } = selectedKontact 
  return (
    <SafeAreaView style={STYLES.container}>
      <View style={STYLES.standard}>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
        <Text>{username}</Text>
        <Text>{website}</Text>
        <Text>{id}</Text>
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  const { selectedKontact } = state.setKontact
  return { selectedKontact }
}

export default connect(mapStateToProps, { setSelectedKontact })(KontactDetailScreen)