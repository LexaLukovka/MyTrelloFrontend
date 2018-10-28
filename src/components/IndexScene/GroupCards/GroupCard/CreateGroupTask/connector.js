import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as create from 'src/redux/task/create/action'
import * as load from 'src/redux/groupCard/load/action'
import isOpen from 'src/redux/task/openOne/action'

const initMapStateToProps = store => ({
  currentGroup: store.groupCard.loadReducer.currentGroup,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    task: bindActionCreators(create, dispatch),
    openTask: bindActionCreators(isOpen, dispatch),
    groupCardLoad: bindActionCreators(load, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
