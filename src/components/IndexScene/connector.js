import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import * as groupCard from 'src/redux/groupCard/action'

const initMapStateToProps = store => ({
  ...store.groupCardReducer,
  auth: store.authReducer,
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    groupCard: bindActionCreators(groupCard, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
