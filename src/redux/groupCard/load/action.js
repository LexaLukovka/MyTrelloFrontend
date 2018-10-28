import GroupCard from 'src/services/api/GroupCard'

export const LOAD_GROUP_CARD = 'LOAD_GROUP_CARD'
export const LOAD_GROUP_CARD_PENDING = 'LOAD_GROUP_CARD_PENDING'
export const LOAD_GROUP_CARD_REJECTED = 'LOAD_GROUP_CARD_REJECTED'
export const LOAD_GROUP_CARD_FULFILLED = 'LOAD_GROUP_CARD_FULFILLED'

export const SAVE_GROUP_CARD = 'SAVE_GROUP_CARD'
export const SAVE_GROUP_CARD_PENDING = 'SAVE_GROUP_CARD_PENDING'
export const SAVE_GROUP_CARD_REJECTED = 'SAVE_GROUP_CARD_REJECTED'
export const SAVE_GROUP_CARD_FULFILLED = 'SAVE_GROUP_CARD_FULFILLED'


export const CURRENT_GROUP = 'CURRENT_GROUP'
export const CURRENT_TASK = 'CURRENT_TASK'

export const load = () => ({
  type: LOAD_GROUP_CARD,
  payload: GroupCard.load(),
})

export const save = groupCard => async dispatch => {
  await dispatch({
    type: SAVE_GROUP_CARD,
    payload: GroupCard.save(groupCard),
  })
}

export const update = groupCard => ({
  type: LOAD_GROUP_CARD,
  payload: GroupCard.update(groupCard),
})


export const currentGroup = (groupId) => ({
  type: CURRENT_GROUP,
  payload: groupId,
})


export const currentTask = (taskId) => ({
  type: CURRENT_TASK,
  payload: taskId,
})
