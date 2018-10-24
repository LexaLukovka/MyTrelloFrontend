import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/groupCard/load/action'
import * as task from 'src/redux/task/update/action'
import dueDates from 'src/redux/task/dueDates/action'

const initMapStateToProps = store => ({
  currentTask: store.groupCard.loadReducer.currentTask,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    group: bindActionCreators(group, dispatch),
    task: bindActionCreators(task, dispatch),
    dueDates: bindActionCreators(dueDates, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
