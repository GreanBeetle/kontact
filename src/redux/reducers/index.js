import { combineReducers } from 'redux'
import getKontactsReducer from './getKontactsReducer'
import setSelectedKontactReducer from './setSelectedKontactReducer'

export default combineReducers({
  getKontacts: getKontactsReducer,
  setKontact: setSelectedKontactReducer 
})

