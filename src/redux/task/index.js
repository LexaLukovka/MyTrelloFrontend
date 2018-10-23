import { combineReducers } from 'redux'
import openOneReducer from './openOne/reducer'
import openUpdateReducer from './openUpdate/reducer'

const task = combineReducers({
  openOneReducer,
  openUpdateReducer,
})

export default task
