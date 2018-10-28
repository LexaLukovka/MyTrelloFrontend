import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import dialogAuthReducer from './dialogAuth/reducer'

import groupCardReducer from './groupCard/reducer'
import openEditGroupReducer from './groupCard/openEdit/reducer'

import taskReducer from './task/reducer'
import openEditTaskReducer from 'src/redux/task/open/reducer'

import layoutReducer from './layout/reducer'
import alertReducer from './alert/reducer'

const reducers = combineReducers({
  authReducer,
  dialogAuthReducer,

  groupCardReducer,
  openEditGroupReducer,

  taskReducer,
  openEditTaskReducer,

  layoutReducer,
  alertReducer,
})

export default reducers
