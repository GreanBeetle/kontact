import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { KontactListScreen, KontactDetailScreen } from './screens'

const Stack = createStackNavigator()

const KontactStackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='KontactList'
      component={KontactListScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name='Kontact'
      component={KontactDetailScreen}
    />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>
    <KontactStackScreens />
  </NavigationContainer>
)

export default Navigation 