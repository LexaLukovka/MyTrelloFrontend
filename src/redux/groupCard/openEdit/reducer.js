import { CLOSE_EDIT_GROUP, OPEN_EDIT_GROUP } from './action'

const initialState = {
  openEdit: null,
}

const openEditReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_EDIT_GROUP:
    case CLOSE_EDIT_GROUP:
      return {
        ...state,
        openEdit: payload || null,
      }

    default: {
      return state
    }
  }
}

export default openEditReducer

