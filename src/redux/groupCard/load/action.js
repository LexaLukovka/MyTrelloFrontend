import GroupCard from 'src/services/api/GroupCard'

export const LOAD_GROUP_CARD = 'LOAD_GROUP_CARD'
export const LOAD_GROUP_CARD_PENDING = 'LOAD_GROUP_CARD_PENDING'
export const LOAD_GROUP_CARD_REJECTED = 'LOAD_GROUP_CARD_REJECTED'
export const LOAD_GROUP_CARD_FULFILLED = 'LOAD_GROUP_CARD_FULFILLED'

export const load = (title) => ({
  type: LOAD_GROUP_CARD,
  payload: GroupCard.load(title),
})

