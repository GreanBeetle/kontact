import {
  GET_KONTACTS_REQUEST,
  GET_KONTACTS_SUCCESS,
  GET_KONTACTS_FAILURE
} from '../actions/types'

const initialState = {
  isGetting: false,
  errorMessage: null,
  kontacts: []
}

/**
 * sets the initial data store values for isGetting, errorMessage, and kontacts.
 * updates these values in the data store after they change in response to
 * actions in getKontactsActions 
 * @param {object} state 
 * @param {string} action 
 */
const getKontactsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_KONTACTS_REQUEST:
      return { ...state, isGetting: true }
    case GET_KONTACTS_SUCCESS:
      return { ...state, isGetting: false, kontacts: action.payload }
    case GET_KONTACTS_FAILURE: 
      return { ...state, isGetting: false, errorMessage: action.payload }
    default: 
      return state 
  }
}

export default getKontactsReducer
