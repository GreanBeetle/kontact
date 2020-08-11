import { combineReducers } from 'redux'
import getKontactsReducer from './getKontactsReducer'

export default combineReducers({ 
  isGetting: getKontactsReducer.isGetting,
  errorMessage: getKontactsReducer.errorMessage,
  kontacts: getKontactsReducer.kontacts 
})

