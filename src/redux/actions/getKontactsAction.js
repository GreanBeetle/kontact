import {
  GET_KONTACTS_REQUEST,
  GET_KONTACTS_SUCCESS,
  GET_KONTACTS_FAILURE
} from './types'

/**
 * payload of info sent to data store when in the middle of an API request
 */
export const getKontactsRequest = () => ({ type: GET_KONTACTS_REQUEST })

/**
 * payload of info for the data store when the API call has succeeded 
 * @param {object} json - object with all of the contact information 
 */
export const getKontactsSuccess = json => ({ type: GET_KONTACTS_SUCCESS, payload: json })

/**
 * payload of info for the data store when the API call has failed. this
 * essentially tells the reducer to update state with an error message 
 * @param {string} errorMessage 
 */
export const getKontactsFailure = errorMessage => ({ type: GET_KONTACTS_FAILURE, payload: errorMessage })

/**
 * asynchronous redux thunk method that handles the API call to retrieve 
 * contact information. dispatches a getKontactRequiest action right before
 * API call is made. if success, dispatches getKontactsSuccess action with the json payload.
 * if failure, dispatches the getKontactsFailure actions with the error message
 */
export const getKontacts = () => {
  console.log('getting kontacts ...') 
  return async dispatch => {
    dispatch(getKontactsRequest())
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      dispatch(getKontactsSuccess(json))
    } catch (error) {
      console.log('get kontacts error', error)
      dispatch(getKontactsFailure(error.message))
    }
  }
}

