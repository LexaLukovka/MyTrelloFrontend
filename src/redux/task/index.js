import { combineReducers } from 'redux'
import openOneReducer from './openOne/reducer'

const task = combineReducers({
  openOneReducer,
})

export default task
