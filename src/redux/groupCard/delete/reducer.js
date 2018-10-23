import { DELETE_GROUP_CARD_FULFILLED, DELETE_GROUP_CARD_PENDING, DELETE_GROUP_CARD_REJECTED } from './action'

const initialState = {
  messages: null,
  errors: [],
  error: false,
  loading: false,
}

const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_GROUP_CARD_PENDING:
      return {
        ...state,
        loading: true,
      }

    case DELETE_GROUP_CARD_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case DELETE_GROUP_CARD_FULFILLED:
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
