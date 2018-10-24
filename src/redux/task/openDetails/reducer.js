import { CLOSE_MODAL_TASK, OPEN_MODAL_TASK } from './action'

const initialState = {
  openDetails: null,
}

const openDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL_TASK: {
      return {
        ...state,
        openDetails: payload,
      }
    }

    case CLOSE_MODAL_TASK:
      return {
        ...state,
        openDetails: null,
      }

    default: {
      return state
    }
  }
}

export default openDetailsReducer

