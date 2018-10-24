import React from 'react'
import { bool, object } from 'prop-types'
import DialogScene from 'components/@auth/Dialog/index'
import LoginScene from 'components/@auth/@login/LoginScene'
import connector from '../connector'


class DialogLogin extends React.Component {
  handleClose = () => {
    const { actions } = this.props
    actions.dialog.closeDialogLogin()
  }

  render() {
    const { dialogLogin } = this.props
    return (
      <DialogScene isOpen={dialogLogin} onClose={this.handleClose}>
        <LoginScene />
      </DialogScene>
    )
  }
}

DialogLogin.propTypes = {
  actions: object.isRequired,
  dialogLogin: bool.isRequired,
}

export default connector(DialogLogin)
