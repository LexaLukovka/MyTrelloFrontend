import { CLOSE_DIALOG_LOGIN, CLOSE_DIALOG_REGISTER, OPEN_DIALOG_LOGIN, OPEN_DIALOG_REGISTER } from './action'

const initialState = {
  dialogLogin: false,
  dialogRegister: false,
}

const dialogAuthReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_DIALOG_LOGIN: {
      return {
        ...state,
        dialogLogin: true,
      }
    }

    case CLOSE_DIALOG_LOGIN:
      return {
        ...state,
        dialogLogin: false,
      }

    case OPEN_DIALOG_REGISTER: {
      return {
        ...state,
        dialogRegister: true,
      }
    }

    case CLOSE_DIALOG_REGISTER:
      return {
        ...state,
        dialogRegister: false,
      }

    default: {
      return state
    }
  }
}

export default dialogAuthReducer

