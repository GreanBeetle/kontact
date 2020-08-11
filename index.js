import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './src/redux/reducers'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleWare(reducer)
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppContainer))

