export const OPEN_ONE_TASK = 'OPEN_ONE_TASK'
export const CLOSE_ONE_TASK = 'CLOSE_ONE_TASK'

const openOneTask = (groupId) => ({
  type: OPEN_ONE_TASK,
  payload: groupId,
})

const closeOneTask = () => ({
  type: CLOSE_ONE_TASK,
})

export default { openOneTask, closeOneTask }
