import {
  GET_KONTACTS_REQUEST,
  GET_KONTACTS_SUCCESS,
  GET_KONTACTS_FAILURE
} from './types'

export const getKontactsRequest = () => ({ type: GET_KONTACTS_REQUEST })
export const getKontactsSuccess = json => ({ type: GET_KONTACTS_SUCCESS, payload: json })
export const getKontactsFailure = errorMessage => ({ type: GET_KONTACTS_FAILURE, payload: errorMessage })

export const getKontacts = () => {
  console.log('getting kontacts ...') 
  return async dispatch => {
    dispatch(getKontactsRequest())
    try {
      const response = await fetch('​https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      console.log('response', response) // REMOVE
      const json = response.json()
      console.log('json', json) // REMOVE 
      dispatch(getKontactsSuccess(json))
    } catch (error) {
      console.log('get kontacts error', error)
      dispatch(getKontactsFailure(error.message))
    }
  }
}

