import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/groupCard/load/action'
import * as task from 'src/redux/task/update/action'
import taskOpen from 'src/redux/task/openUpdate/action'
import dueDates from 'src/redux/task/dueDates/action'

const initMapStateToProps = store => ({
  currentTask: store.groupCard.loadReducer.currentTask,
  currentGroup: store.groupCard.loadReducer.currentGroup,
  openDueDates: store.task.openDueDatesReducer.openDueDates,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groupCard: bindActionCreators(group, dispatch),
    task: bindActionCreators(task, dispatch),
    taskOpen: bindActionCreators(taskOpen, dispatch),
    dueDates: bindActionCreators(dueDates, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
