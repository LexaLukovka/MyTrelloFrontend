import {
  CLOSE_MODAL_TASK,
  CLOSE_ONE_TASK,
  CLOSE_UPDATE_TASK,
  OPEN_MODAL_TASK,
  OPEN_ONE_TASK,
  OPEN_UPDATE_TASK,
} from './action'

const initialState = {
  openId: null,
  openRefactor: null,
  openDetails: null,
}

const openEditTaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_ONE_TASK:
    case CLOSE_ONE_TASK:
      return {
        ...state,
        openId: payload || null,
      }

    case OPEN_UPDATE_TASK:
    case CLOSE_UPDATE_TASK:
      return {
        ...state,
        openRefactor: payload || null,
      }

    case OPEN_MODAL_TASK:
    case CLOSE_MODAL_TASK:
      return {
        ...state,
        openDetails: payload || null,
      }

    default: {
      return state
    }
  }
}

export default openEditTaskReducer

