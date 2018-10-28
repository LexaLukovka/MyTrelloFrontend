import {
  LOGIN_FACEBOOK_USER_FULFILLED,
  LOGIN_FACEBOOK_USER_PENDING,
  LOGIN_FACEBOOK_USER_REJECTED,

  LOGIN_GOOGLE_USER_FULFILLED,
  LOGIN_GOOGLE_USER_PENDING,
  LOGIN_GOOGLE_USER_REJECTED,

  LOGIN_USER_FULFILLED,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,

  LOGOUT_USER,

  REGISTER_USER_FULFILLED,
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
} from './action'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  errors: [],
  error: false,
  loading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FACEBOOK_USER_PENDING:
    case LOGIN_GOOGLE_USER_PENDING:
    case REGISTER_USER_PENDING:
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true,
      }

    case REGISTER_USER_REJECTED:
    case LOGIN_GOOGLE_USER_REJECTED:
    case LOGIN_FACEBOOK_USER_REJECTED:
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case REGISTER_USER_FULFILLED:
    case LOGIN_GOOGLE_USER_FULFILLED:
    case LOGIN_FACEBOOK_USER_FULFILLED:
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        user: payload,
      }

    case LOGOUT_USER:
      return { ...state, user: null }

    default:
      return state
  }
}

export default authReducer
