export const OPEN_DUE_DATES = 'OPEN_DUE_DATES'
export const CLOSE_DUE_DATES = 'CLOSE_DUE_DATES'

const openDueDates = () => ({
  type: OPEN_DUE_DATES,
})

const closeDueDates = () => ({
  type: CLOSE_DUE_DATES,
})

export default { openDueDates, closeDueDates }
