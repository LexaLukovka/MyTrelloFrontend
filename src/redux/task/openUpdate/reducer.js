import { CLOSE_UPDATE_TASK, OPEN_UPDATE_TASK } from './action'

const initialState = {
  openDialog: false,
}

const openUpdateReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_UPDATE_TASK: {
      return {
        ...state,
        openDialog: true,
      }
    }

    case CLOSE_UPDATE_TASK:
      return {
        ...state,
        openDialog: false,
      }

    default: {
      return state
    }
  }
}

export default openUpdateReducer

