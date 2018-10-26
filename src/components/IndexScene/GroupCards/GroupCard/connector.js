import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import isOpen from 'src/redux/task/openOne/action'
import * as groupCard from 'src/redux/groupCard/load/action'
import groupEdit from 'src/redux/groupCard/openEdit/action'

const initMapStateToProps = store => ({
  openTask: store.task.openOneReducer,
  openEdit: store.groupCard.openEditReducer.openEdit,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    task: bindActionCreators(isOpen, dispatch),
    groupCard: bindActionCreators(groupCard, dispatch),
    groupEdit: bindActionCreators(groupEdit, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
