import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as groupCard from 'src/redux/groupCard/action'

const initMapStateToProps = store => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groupCard: bindActionCreators(groupCard, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
