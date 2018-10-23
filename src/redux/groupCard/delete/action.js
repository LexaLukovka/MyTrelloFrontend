import GroupCard from 'src/services/api/GroupCard'
import { load } from 'src/redux/groupCard/load/action'

export const DELETE_GROUP_CARD = 'DELETE_GROUP_CARD'
export const DELETE_GROUP_CARD_PENDING = 'DELETE_GROUP_CARD_PENDING'
export const DELETE_GROUP_CARD_REJECTED = 'DELETE_GROUP_CARD_REJECTED'
export const DELETE_GROUP_CARD_FULFILLED = 'DELETE_GROUP_CARD_FULFILLED'


const deleteGroup = (groupId) => async dispatch => {
  await dispatch({
    type: DELETE_GROUP_CARD,
    payload: GroupCard.delete(groupId),
  })

  dispatch(load())
}


export default { deleteGroup }
