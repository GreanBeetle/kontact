import {
  SET_SELECTED_KONTACT,
  SET_SELECTED_KONTACT_TO_NULL
} from './types'

/**
 * dictate new value of selected kontact for data store 
 * @param {object} kontact 
 */
export const setSelectedKontact = kontact => {
  if (kontact) return { type: SET_SELECTED_KONTACT, payload: kontact }
  else return { type: SET_SELECTED_KONTACT_TO_NULL }
}




