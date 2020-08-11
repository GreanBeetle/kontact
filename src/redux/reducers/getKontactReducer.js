import {
  GET_KONTACT_REQUEST,
  GET_KONTACT_SUCCESS,
  GET_KONTACT_FAILURE
} from '../actions/types'

const initialState = {
  isGetting: false,
  errorMessage: null,
  kontacts: []
}

const getKontactReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_KONTACT_REQUEST:
      return { ...state, isGetting: true }
    case GET_KONTACT_SUCCESS:
      return { ...state, isGetting: false, kontacts: action.payload }
    case GET_KONTACT_FAILURE: 
      return { ...state, isGetting: false, errorMessage: action.payload }
    default: 
      return state 
  }
}

export default getKontactReducer
