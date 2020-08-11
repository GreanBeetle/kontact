import { combineReducers } from 'redux'
import getKontactsReducer from './getKontactsReducer'

export default combineReducers({ getKontacts: getKontactsReducer })

