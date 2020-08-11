import {
  GET_KONTACTS_REQUEST,
  GET_KONTACTS_SUCCESS,
  GET_KONTACTS_FAILURE
} from './types'

export const getKontactsRequest = () => ({ type: GET_KONTACTS_REQUEST })
export const getKontactsSuccess = json => ({ type: GET_KONTACTS_SUCCESS, payload: json })
export const getKontactsFailure = errorMessage => ({ type: GET_KONTACTS_FAILURE, payload: errorMessage })

export const getKontacts = () => {
  console.log('get kontacts') // remove 
}
