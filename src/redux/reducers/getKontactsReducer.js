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
