/* eslint-disable no-underscore-dangle,no-return-assign */
import {
  CURRENT_GROUP,
  CURRENT_TASK,
  LOAD_GROUP_CARD_FULFILLED,
  LOAD_GROUP_CARD_PENDING,
  LOAD_GROUP_CARD_REJECTED,
  SAVE_GROUP_CARD_FULFILLED,
  SAVE_GROUP_CARD_PENDING,
  SAVE_GROUP_CARD_REJECTED,
} from './action'

const initialState = {
  groupCard: [],
  currentTask: [],
  currentGroup: [],
  messages: null,
  errors: [],
  error: false,
  loading: false,
}

const loadReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_GROUP_CARD_PENDING:
    case SAVE_GROUP_CARD_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_GROUP_CARD_REJECTED:
    case SAVE_GROUP_CARD_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errors: payload,

      }

    case LOAD_GROUP_CARD_FULFILLED:
    case SAVE_GROUP_CARD_FULFILLED:
      return {
        ...state,
        loading: false,
        groupCard: payload,
      }


    case CURRENT_GROUP: {
      let groupCard
      state.groupCard.groupCard.forEach(groups => (groups._id === payload ? groupCard = groups : null))

      return {
        ...state,
        loading: false,
        currentGroup: groupCard,
      }
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
