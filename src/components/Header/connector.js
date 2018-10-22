import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as auth from 'src/redux/auth/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  header: store.headerReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
