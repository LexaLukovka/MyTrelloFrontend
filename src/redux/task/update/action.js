import Task from 'src/services/api/Task'

export const UPDATE_GROUP_CARD = 'UPDATE_GROUP_CARD'
export const UPDATE_GROUP_CARD_PENDING = 'UPDATE_GROUP_CARD_PENDING'
export const UPDATE_GROUP_CARD_REJECTED = 'UPDATE_GROUP_CARD_REJECTED'
export const UPDATE_GROUP_CARD_FULFILLED = 'UPDATE_GROUP_CARD_FULFILLED'

export const update = (task) => ({
  type: UPDATE_GROUP_CARD,
  payload: Task.update(task),
})
