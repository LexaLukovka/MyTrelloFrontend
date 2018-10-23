import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import isOpen from 'src/redux/task/openOne/action'
import group from 'src/redux/groupCard/delete/action'

const initMapStateToProps = store => ({
  openTask: store.task.openOneReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    task: bindActionCreators(isOpen, dispatch),
    group: bindActionCreators(group, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
