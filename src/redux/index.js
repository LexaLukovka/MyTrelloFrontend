import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import groupCard from './groupCard'
import task from './task'

import authReducer from './auth/reducer'
import dialogAuthReducer from './dialogAuth/reducer'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import alertReducer from './alert/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
}

const reducers = combineReducers({
  groupCard,
  task,
  authReducer,
  dialogAuthReducer,
  layoutReducer,
  headerReducer,
  alertReducer,
})

export default persistReducer(persistConfig, reducers)
