import Task from 'src/services/api/Task'
import { load } from 'src/redux/groupCard/action'

export const CREATE_TASK = 'CREATE_TASK'
export const CREATE_TASK_PENDING = 'CREATE_TASK_PENDING'
export const CREATE_TASK_REJECTED = 'CREATE_TASK_REJECTED'
export const CREATE_TASK_FULFILLED = 'CREATE_TASK_FULFILLED'

export const UPDATE_TASK = 'UPDATE_TASK'
export const UPDATE_TASK_PENDING = 'UPDATE_TASK_PENDING'
export const UPDATE_TASK_REJECTED = 'UPDATE_TASK_REJECTED'
export const UPDATE_TASK_FULFILLED = 'UPDATE_TASK_FULFILLED'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING'
export const DELETE_TASK_REJECTED = 'DELETE_TASK_REJECTED'
export const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED'


export const create = (task) => ({
  type: CREATE_TASK,
  payload: Task.create(task),
})

export const update = (task) => ({
  type: UPDATE_TASK,
  payload: Task.update(task),
})

export const deleteTask = (groupId, taskId) => async dispatch => {
  await dispatch({
    type: DELETE_TASK,
    payload: Task.delete(groupId, taskId),
  })

  dispatch(load())
}
