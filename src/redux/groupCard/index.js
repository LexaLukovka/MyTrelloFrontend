import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import createReducer from './create/reducer'
import loadReducer from './load/reducer'

const persistConfig = {
  key: 'groupCard',
  storage,
  whitelist: ['loadReducer'],
}

const groupCard = combineReducers({
  createReducer,
  loadReducer,
})

export default persistReducer(persistConfig, groupCard)
