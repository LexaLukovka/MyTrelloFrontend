import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import dialog from 'src/redux/dialogAuth/action'

const initMapStateToProps = store => ({
  dialogLogin: store.dialogAuthReducer.dialogLogin,
  dialogRegister: store.dialogAuthReducer.dialogRegister,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    dialog: bindActionCreators(dialog, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
