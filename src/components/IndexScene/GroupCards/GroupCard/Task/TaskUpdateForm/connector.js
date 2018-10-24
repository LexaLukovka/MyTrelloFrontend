import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/groupCard/load/action'
import * as task from 'src/redux/task/update/action'
import taskOpen from 'src/redux/task/openUpdate/action'

const initMapStateToProps = store => ({
  currentTask: store.groupCard.loadReducer.currentTask,
  currentGroup: store.groupCard.loadReducer.currentGroup,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    group: bindActionCreators(group, dispatch),
    task: bindActionCreators(task, dispatch),
    taskOpen: bindActionCreators(taskOpen, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
