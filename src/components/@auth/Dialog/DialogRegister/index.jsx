import React from 'react'
import { bool, object } from 'prop-types'
import DialogScene from 'components/@auth/Dialog/index'
import RegisterScene from 'components/@auth/@register/RegisterScene'
import connector from '../connector'


class DialogRegister extends React.Component {
  handleClose = () => {
    const { actions } = this.props
    actions.dialog.closeDialogRegister()
  }

  render() {
    const { dialogRegister } = this.props
    return (
      <DialogScene isOpen={dialogRegister} onClose={this.handleClose}>
        <RegisterScene />
      </DialogScene>
    )
  }
}

DialogRegister.propTypes = {
  actions: object.isRequired,
  dialogRegister: bool.isRequired,
}

export default connector(DialogRegister)
