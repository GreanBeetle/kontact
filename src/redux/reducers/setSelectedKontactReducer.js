import { 
  SET_SELECTED_KONTACT, 
  SET_SELECTED_KONTACT_TO_NULL 
} from '../actions/types'

const initialSelectedKontactState = {
  selectedKontact: null
}

/**
 * set initial data store values for selectedKontact
 * update that value when a setSelectedKontactAction has been dispatched 
 * @param {object} state
 * @param {string} actopm
 */
export default (state = initialSelectedKontactState, action) => {
  switch (action.type) {
    case SET_SELECTED_KONTACT:
      return { ...state, selectedKontact: action.payload }
    case SET_SELECTED_KONTACT_TO_NULL: 
      return { ...state, selectedKontact: null }
    default:
      return state
  }
}