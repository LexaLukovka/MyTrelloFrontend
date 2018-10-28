import GroupCard from 'src/services/api/GroupCard'

export const LOAD_GROUP_CARD = 'LOAD_GROUP_CARD'
export const LOAD_GROUP_CARD_PENDING = 'LOAD_GROUP_CARD_PENDING'
export const LOAD_GROUP_CARD_REJECTED = 'LOAD_GROUP_CARD_REJECTED'
export const LOAD_GROUP_CARD_FULFILLED = 'LOAD_GROUP_CARD_FULFILLED'

export const CREATE_GROUP_CARD = 'CREATE_GROUP_CARD'
export const CREATE_GROUP_CARD_PENDING = 'CREATE_GROUP_CARD_PENDING'
export const CREATE_GROUP_CARD_REJECTED = 'CREATE_GROUP_CARD_REJECTED'
export const CREATE_GROUP_CARD_FULFILLED = 'CREATE_GROUP_CARD_FULFILLED'

export const UPDATE_GROUP_CARD = 'UPDATE_GROUP_CARD'
export const UPDATE_GROUP_CARD_PENDING = 'UPDATE_GROUP_CARD_PENDING'
export const UPDATE_GROUP_CARD_REJECTED = 'UPDATE_GROUP_CARD_REJECTED'
export const UPDATE_GROUP_CARD_FULFILLED = 'UPDATE_GROUP_CARD_FULFILLED'

export const SAVE_GROUP_CARD = 'SAVE_GROUP_CARD'
export const SAVE_GROUP_CARD_PENDING = 'SAVE_GROUP_CARD_PENDING'
export const SAVE_GROUP_CARD_REJECTED = 'SAVE_GROUP_CARD_REJECTED'
export const SAVE_GROUP_CARD_FULFILLED = 'SAVE_GROUP_CARD_FULFILLED'

export const ADD_PICTURE_TASK = 'ADD_PICTURE_TASK'

export const DELETE_GROUP_CARD = 'DELETE_GROUP_CARD'
export const DELETE_GROUP_CARD_PENDING = 'DELETE_GROUP_CARD_PENDING'
export const DELETE_GROUP_CARD_REJECTED = 'DELETE_GROUP_CARD_REJECTED'
export const DELETE_GROUP_CARD_FULFILLED = 'DELETE_GROUP_CARD_FULFILLED'


export const CURRENT_GROUP = 'CURRENT_GROUP'
export const CURRENT_TASK = 'CURRENT_TASK'

export const load = () => ({
  type: LOAD_GROUP_CARD,
  payload: GroupCard.load(),
})

export const create = (title) => ({
  type: CREATE_GROUP_CARD,
  payload: GroupCard.create(title),
})

export const save = groupCard => ({
  type: SAVE_GROUP_CARD,
  payload: GroupCard.save(groupCard),
})

export const update = groupCard => ({
  type: UPDATE_GROUP_CARD,
  payload: GroupCard.update(groupCard),
})

export const addPictures = ({ ...picture }) => ({
  type: ADD_PICTURE_TASK,
  payload: picture,
})

export const deleteGroup = (groupId) => async dispatch => {
  await dispatch({
    type: DELETE_GROUP_CARD,
    payload: GroupCard.delete(groupId),
  })

  dispatch(load())
}


export const currentGroup = (groupId) => ({
  type: CURRENT_GROUP,
  payload: groupId,
})

export const currentTask = (taskId) => ({
  type: CURRENT_TASK,
  payload: taskId,
})
