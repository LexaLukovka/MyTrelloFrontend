import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as task from 'src/redux/task/action'
import * as groupCard from 'src/redux/groupCard/action'
import isOpen from 'src/redux/task/open/action'

const initMapStateToProps = store => ({
  currentGroup: store.groupCardReducer.currentGroup,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    task: bindActionCreators(task, dispatch),
    openTask: bindActionCreators(isOpen, dispatch),
    groupCard: bindActionCreators(groupCard, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
