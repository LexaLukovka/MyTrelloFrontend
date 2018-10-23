import GroupCard from 'src/services/api/GroupCard'

export const LOAD_GROUP_CARD = 'LOAD_GROUP_CARD'
export const LOAD_GROUP_CARD_PENDING = 'LOAD_GROUP_CARD_PENDING'
export const LOAD_GROUP_CARD_REJECTED = 'LOAD_GROUP_CARD_REJECTED'
export const LOAD_GROUP_CARD_FULFILLED = 'LOAD_GROUP_CARD_FULFILLED'

export const DELETE_GROUP_CARD = 'DELETE_GROUP_CARD'
export const DELETE_GROUP_CARD_PENDING = 'DELETE_GROUP_CARD_PENDING'
export const DELETE_GROUP_CARD_REJECTED = 'DELETE_GROUP_CARD_REJECTED'
export const DELETE_GROUP_CARD_FULFILLED = 'DELETE_GROUP_CARD_FULFILLED'

export const CURRENT_TASK = 'CURRENT_TASK'

export const load = () => ({
  type: LOAD_GROUP_CARD,
  payload: GroupCard.load(),
})

export const currentTask = (taskId) => ({
  type: CURRENT_TASK,
  payload: taskId,
})
