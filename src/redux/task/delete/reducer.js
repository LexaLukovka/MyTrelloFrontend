import { DELETE_TASK_FULFILLED, DELETE_TASK_PENDING, DELETE_TASK_REJECTED } from './action'

const initialState = {
  messages: null,
  errors: [],
  error: false,
  loading: false,
}

const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_TASK_PENDING:
      return {
        ...state,
        loading: true,
      }

    case DELETE_TASK_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

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

export default deleteReducer
