/* eslint-disable no-underscore-dangle,no-return-assign */
import {
  CURRENT_TASK,
  DELETE_GROUP_CARD_FULFILLED,
  DELETE_GROUP_CARD_PENDING,
  DELETE_GROUP_CARD_REJECTED,
  LOAD_GROUP_CARD_FULFILLED,
  LOAD_GROUP_CARD_PENDING,
  LOAD_GROUP_CARD_REJECTED,
} from './action'

const initialState = {
  groupCard: [],
  currentTask: [],
  messages: null,
  errors: [],
  error: false,
  loading: false,
}

const loadReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GROUP_CARD_PENDING:
    case DELETE_GROUP_CARD_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_GROUP_CARD_REJECTED:
    case DELETE_GROUP_CARD_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case LOAD_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        groupCard: payload,
      }

    case DELETE_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        messages: payload,
      }

    case CURRENT_TASK: {
      let groupCard
      state.groupCard.groupCard.forEach(groups => (groups._id === payload.groupId ? groupCard = groups : null))

      let task
      state.groupCard.groupCard.forEach(groups =>
        groups.tasks.forEach(group => (group._id === payload.taskId ? task = group : null)))

      return {
        ...state,
        loading: false,
        currentGroup: groupCard,
        currentTask: task,
      }
    }

    default:
      return state
  }
}

export default loadReducer
