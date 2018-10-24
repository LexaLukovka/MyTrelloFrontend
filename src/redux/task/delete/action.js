import Task from 'src/services/api/Task'
import { load } from 'src/redux/groupCard/load/action'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING'
export const DELETE_TASK_REJECTED = 'DELETE_TASK_REJECTED'
export const DELETE_TASK_FULFILLED = 'DELETE_TASK_FULFILLED'


const deleteTask = (groupId, taskId) => async dispatch => {
  await dispatch({
    type: DELETE_TASK,
    payload: Task.delete(groupId, taskId),
  })

  dispatch(load())
}


export default { deleteTask }
