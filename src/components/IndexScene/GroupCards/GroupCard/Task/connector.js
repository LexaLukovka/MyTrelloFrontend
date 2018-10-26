import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/groupCard/load/action'
import taskOpen from 'src/redux/task/openDetails/action'
import taskOpenUpdate from 'src/redux/task/openUpdate/action'
import task from 'src/redux/task/delete/action'
import dialog from 'src/redux/dialogAuth/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  openRefactor: store.task.openUpdateReducer.openRefactor,
  openDetails: store.task.openDetailsReducer.openDetails,
  currentTask: store.groupCard.loadReducer.currentTask,
  currentGroup: store.groupCard.loadReducer.currentGroup,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groupCard: bindActionCreators(group, dispatch),
    task: bindActionCreators(task, dispatch),
    taskOpen: bindActionCreators(taskOpen, dispatch),
    taskOpenUpdate: bindActionCreators(taskOpenUpdate, dispatch),
    dialog: bindActionCreators(dialog, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
