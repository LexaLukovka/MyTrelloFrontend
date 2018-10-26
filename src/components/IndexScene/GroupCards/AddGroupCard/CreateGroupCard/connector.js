import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as load from 'src/redux/groupCard/load/action'

const initMapStateToProps = store => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groupCard: bindActionCreators(load, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
