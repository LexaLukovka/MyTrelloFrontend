import Task from 'src/services/api/Task'

export const CREATE_GROUP_CARD = 'CREATE_GROUP_CARD'
export const CREATE_GROUP_CARD_PENDING = 'CREATE_GROUP_CARD_PENDING'
export const CREATE_GROUP_CARD_REJECTED = 'CREATE_GROUP_CARD_REJECTED'
export const CREATE_GROUP_CARD_FULFILLED = 'CREATE_GROUP_CARD_FULFILLED'

export const create = (task) => ({
  type: CREATE_GROUP_CARD,
  payload: Task.create(task),
})
