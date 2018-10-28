/* eslint-disable object-property-newline */

export const OPEN_ONE_TASK = 'OPEN_ONE_TASK'
export const CLOSE_ONE_TASK = 'CLOSE_ONE_TASK'

export const OPEN_UPDATE_TASK = 'OPEN_UPDATE_TASK'
export const CLOSE_UPDATE_TASK = 'CLOSE_UPDATE_TASK'

export const OPEN_MODAL_TASK = 'OPEN_MODAL_TASK'
export const CLOSE_MODAL_TASK = 'CLOSE_MODAL_TASK'


const openOneTask = (groupId) => ({
  type: OPEN_ONE_TASK,
  payload: groupId,
})
const closeOneTask = () => ({
  type: CLOSE_ONE_TASK,
})

const openUpdateTask = (taskId) => ({
  type: OPEN_UPDATE_TASK,
  payload: taskId,
})
const closeUpdateTask = () => ({
  type: CLOSE_UPDATE_TASK,
})

const openDetailsTask = (taskId) => ({
  type: OPEN_MODAL_TASK,
  payload: taskId,
})
const closeDetailsTask = () => ({
  type: CLOSE_MODAL_TASK,
})


export default {
  openOneTask, closeOneTask,
  openUpdateTask, closeUpdateTask,
  openDetailsTask, closeDetailsTask,
}
