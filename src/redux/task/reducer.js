import {
  CREATE_TASK_FULFILLED,
  CREATE_TASK_PENDING,
  CREATE_TASK_REJECTED,

  DELETE_TASK_FULFILLED,
  DELETE_TASK_PENDING,
  DELETE_TASK_REJECTED,

  UPDATE_GROUP_CARD_FULFILLED,
  UPDATE_GROUP_CARD_PENDING,
  UPDATE_GROUP_CARD_REJECTED,
} from './action'

const initialState = {
  groupCard: [],
  errors: [],
  error: false,
  loading: false,
}

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TASK_PENDING:
    case UPDATE_GROUP_CARD_PENDING:
    case DELETE_TASK_PENDING:
      return {
        ...state,
        loading: true,
      }

    case CREATE_TASK_REJECTED:
    case UPDATE_GROUP_CARD_REJECTED:
    case DELETE_TASK_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,
      }

    case CREATE_TASK_FULFILLED:
    case UPDATE_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        groupCard: payload,
      }

    case DELETE_TASK_FULFILLED:
      return {
        ...state,
        loading: false,
        messages: payload,
      }

    default:
      return state
  }
}

export default taskReducer
