import Task from 'src/services/api/Task'
import { load } from 'src/redux/groupCard/action'

export const CREATE_TASK = 'CREATE_TASK'
export const CREATE_TASK_PENDING = 'CREATE_TASK_PENDING'
export const CREATE_TASK_REJECTED = 'CREATE_TASK_REJECTED'
export const CREATE_TASK_FULFILLED = 'CREATE_TASK_FULFILLED'

export const UPDATE_GROUP_CARD = 'UPDATE_GROUP_CARD'
export const UPDATE_GROUP_CARD_PENDING = 'UPDATE_GROUP_CARD_PENDING'
export const UPDATE_GROUP_CARD_REJECTED = 'UPDATE_GROUP_CARD_REJECTED'
export const UPDATE_GROUP_CARD_FULFILLED = 'UPDATE_GROUP_CARD_FULFILLED'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING'
export const DELETE_TASK_REJECTED = 'DELETE_TASK_REJECTED'
export const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED'


export const create = (task) => ({
  type: CREATE_TASK,
  payload: Task.create(task),
})

export const update = (task) => ({
  type: UPDATE_GROUP_CARD,
  payload: Task.update(task),
})

export const deleteTask = (groupId, taskId) => async dispatch => {
  await dispatch({
    type: DELETE_TASK,
    payload: Task.delete(groupId, taskId),
  })

  dispatch(load())
}
