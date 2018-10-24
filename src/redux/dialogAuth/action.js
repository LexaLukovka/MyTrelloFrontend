export const OPEN_DIALOG_LOGIN = 'OPEN_DIALOG_LOGIN'
export const CLOSE_DIALOG_LOGIN = 'CLOSE_DIALOG_LOGIN'

export const OPEN_DIALOG_REGISTER = 'OPEN_DIALOG_REGISTER'
export const CLOSE_DIALOG_REGISTER = 'CLOSE_DIALOG_REGISTER'

const openDialogLogin = () => ({
  type: OPEN_DIALOG_LOGIN,
})

const closeDialogLogin = () => ({
  type: CLOSE_DIALOG_LOGIN,
})

const openDialogRegister = () => ({
  type: OPEN_DIALOG_REGISTER,
})

const closeDialogRegister = () => ({
  type: CLOSE_DIALOG_REGISTER,
})

export default { openDialogLogin, closeDialogLogin, openDialogRegister, closeDialogRegister }
