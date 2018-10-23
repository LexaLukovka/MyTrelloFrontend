import { CLOSE_ONE_TASK, OPEN_ONE_TASK } from './action'

const initialState = {
  openId: null,
}

const openOneReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_ONE_TASK: {
      return {
        ...state,
        openId: payload,
      }
    }

    case CLOSE_ONE_TASK:
      return {
        ...state,
        openId: null,
      }

    default: {
      return state
    }
  }
}

export default openOneReducer

