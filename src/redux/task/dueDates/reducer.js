import { CLOSE_DUE_DATES, OPEN_DUE_DATES } from './action'

const initialState = {
  openDueDates: false,
}

const openDueDatesReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_DUE_DATES: {
      return {
        ...state,
        openDueDates: true,
      }
    }

    case CLOSE_DUE_DATES:
      return {
        ...state,
        openDueDates: false,
      }

    default: {
      return state
    }
  }
}

export default openDueDatesReducer

