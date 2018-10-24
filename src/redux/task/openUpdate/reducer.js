import { CLOSE_UPDATE_TASK, OPEN_UPDATE_TASK } from './action'

const initialState = {
  openRefactor: null,
}

const openUpdateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_UPDATE_TASK: {
      return {
        ...state,
        openRefactor: payload,
      }
    }

    case CLOSE_UPDATE_TASK:
      return {
        ...state,
        openRefactor: null,
      }

    default: {
      return state
    }
  }
}

export default openUpdateReducer

