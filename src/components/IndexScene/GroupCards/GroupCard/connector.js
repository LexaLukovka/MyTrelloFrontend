import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import isOpen from 'src/redux/task/openOne/action'

const initMapStateToProps = store => ({
  openTask: store.task.openOneReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    task: bindActionCreators(isOpen, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
