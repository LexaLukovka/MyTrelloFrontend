export const OPEN_MODAL_TASK = 'OPEN_MODAL_TASK'
export const CLOSE_MODAL_TASK = 'CLOSE_MODAL_TASK'

const openDetailsTask = (taskId) => ({
  type: OPEN_MODAL_TASK,
  payload: taskId,
})

const closeDetailsTask = () => ({
  type: CLOSE_MODAL_TASK,
})

export default { openDetailsTask, closeDetailsTask }
