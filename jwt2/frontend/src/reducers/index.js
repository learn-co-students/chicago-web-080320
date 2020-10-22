


import { combineReducers } from 'redux'
import authReducer from './auth'


// does everyaction hit every localReducer: yes it hits every reducer
// what will state be for each of those reducers: state will be just the states of that key


export default combineReducers({
  auth: authReducer
})
