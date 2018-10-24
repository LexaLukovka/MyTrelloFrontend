import { CLOSE_UPDATE_TASK, OPEN_UPDATE_TASK } from './action'

const initialState = {
  openDialog: null,
}

const openUpdateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_UPDATE_TASK: {
      return {
        ...state,
        openDialog: payload,
      }
    }

    case CLOSE_UPDATE_TASK:
      return {
        ...state,
        openDialog: null,
      }

    default: {
      return state
    }
  }
}

export default openUpdateReducer

