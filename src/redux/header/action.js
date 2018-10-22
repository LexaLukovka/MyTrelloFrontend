/* eslint-disable no-shadow */
export const SET_HEADER_TITLE = 'SET_HEADER_TITLE'
export const RESET_HEADER_TITLE = 'RESET_HEADER_TITLE'

const title = title => ({
  type: SET_HEADER_TITLE,
  payload: {
    title,
  },
})

const resetTitle = () => ({
  type: RESET_HEADER_TITLE,
})

export default { title, resetTitle }
