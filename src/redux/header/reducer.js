import {
  SET_HEADER_TITLE,
  RESET_HEADER_TITLE,
} from './action'

const initialState = {
  title: 'MyTrello',
  link: '/',
}

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HEADER_TITLE:
      return {
        ...state,
        title: payload.title,
      }

    case RESET_HEADER_TITLE:
      return {
        ...state,
        title: initialState.title,
      }

    default:
      return state
  }
}

export default headerReducer
