/* eslint-disable no-underscore-dangle,no-return-assign */
import {
  CREATE_GROUP_CARD_FULFILLED,
  CREATE_GROUP_CARD_PENDING,
  CREATE_GROUP_CARD_REJECTED,
  CURRENT_GROUP,
  CURRENT_TASK,
  DELETE_GROUP_CARD_FULFILLED,
  DELETE_GROUP_CARD_PENDING,
  DELETE_GROUP_CARD_REJECTED,
  LOAD_GROUP_CARD_FULFILLED,
  LOAD_GROUP_CARD_PENDING,
  LOAD_GROUP_CARD_REJECTED,
  SAVE_GROUP_CARD_FULFILLED,
  SAVE_GROUP_CARD_REJECTED,
  UPDATE_GROUP_CARD_FULFILLED,
  UPDATE_GROUP_CARD_PENDING,
  UPDATE_GROUP_CARD_REJECTED,
  ADD_PICTURE_TASK,
} from './action'

const initialState = {
  groupCard: {},
  currentTask: {},
  currentGroup: {},
  messages: null,
  errors: [],
  error: false,
  loading: false,
}

const groupCardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SAVE_GROUP_CARD_PENDING:
    case LOAD_GROUP_CARD_PENDING:
    case CREATE_GROUP_CARD_PENDING:
    case UPDATE_GROUP_CARD_PENDING:
    case DELETE_GROUP_CARD_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_GROUP_CARD_REJECTED:
    case CREATE_GROUP_CARD_REJECTED:
    case UPDATE_GROUP_CARD_REJECTED:
    case SAVE_GROUP_CARD_REJECTED:
    case DELETE_GROUP_CARD_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case LOAD_GROUP_CARD_FULFILLED:
    case UPDATE_GROUP_CARD_FULFILLED:
    case SAVE_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        groupCard: payload,
      }

    case CREATE_GROUP_CARD_FULFILLED:
    case DELETE_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        messages: payload,
      }

    case CURRENT_GROUP: {
      let groupCard = {}
      state.groupCard.groupCard.forEach(groups => (groups._id === payload && (groupCard = groups)))

      return {
        ...state,
        loading: false,
        currentGroup: groupCard,
      }
    }

    case CURRENT_TASK: {
      let groupCard = {}
      state.groupCard.groupCard.forEach(groups => (groups._id === payload.groupId ? groupCard = groups : null))

      let task = {}
      state.groupCard.groupCard.forEach(groups =>
        groups.tasks.forEach(group => (group._id === payload.taskId && (task = group))))

      return {
        ...state,
        loading: false,
        currentGroup: groupCard,
        currentTask: task,
      }
    }

    case ADD_PICTURE_TASK:
      return {
        ...state,
        currentTask: { ...state.currentTask, ...payload },
      }


    default:
      return state
  }
}

export default groupCardReducer
