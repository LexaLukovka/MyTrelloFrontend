import { CREATE_GROUP_CARD_FULFILLED, CREATE_GROUP_CARD_PENDING, CREATE_GROUP_CARD_REJECTED } from './action'

const initialState = {
  groupCard: null,
  errors: [],
  error: false,
  loading: false,
}

const createReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_GROUP_CARD_PENDING:
      return {
        ...state,
        loading: true,
      }

    case CREATE_GROUP_CARD_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case CREATE_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        groupCard: payload,
      }

    default:
      return state
  }
}

export default createReducer
