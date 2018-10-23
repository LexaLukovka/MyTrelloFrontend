import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/groupCard/load/action'
import task from 'src/redux/task/openUpdate/action'

const initMapStateToProps = store => ({
  openDialog: store.task.openUpdateReducer.openDialog,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    group: bindActionCreators(group, dispatch),
    task: bindActionCreators(task, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
