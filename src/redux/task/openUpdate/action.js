export const OPEN_UPDATE_TASK = 'OPEN_UPDATE_TASK'
export const CLOSE_UPDATE_TASK = 'CLOSE_UPDATE_TASK'

const openUpdateTask = (taskId) => ({
  type: OPEN_UPDATE_TASK,
  payload: taskId,
})

const closeUpdateTask = () => ({
  type: CLOSE_UPDATE_TASK,
})

export default { openUpdateTask, closeUpdateTask }
