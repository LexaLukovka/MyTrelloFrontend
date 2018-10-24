import { combineReducers } from 'redux'
import openOneReducer from './openOne/reducer'
import openUpdateReducer from './openUpdate/reducer'
import openDetailsReducer from './openDetails/reducer'
import openDueDatesReducer from './dueDates/reducer'

const task = combineReducers({
  openOneReducer,
  openUpdateReducer,
  openDetailsReducer,
  openDueDatesReducer,
})

export default task
