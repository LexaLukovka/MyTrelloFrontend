export const OPEN_EDIT_GROUP = 'OPEN_EDIT_GROUP'
export const CLOSE_EDIT_GROUP = 'CLOSE_EDIT_GROUP'

const openEdit = (groupId) => ({
  type: OPEN_EDIT_GROUP,
  payload: groupId,
})

const closeEdit = () => ({
  type: CLOSE_EDIT_GROUP,
})

export default { openEdit, closeEdit }
