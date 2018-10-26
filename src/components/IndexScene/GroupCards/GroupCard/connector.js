import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import isOpen from 'src/redux/task/openOne/action'
import * as group from 'src/redux/groupCard/load/action'
import groupDelete from 'src/redux/groupCard/delete/action'
import groupEdit from 'src/redux/groupCard/openEdit/action'

const initMapStateToProps = store => ({
  openTask: store.task.openOneReducer,
  openEdit: store.groupCard.openEditReducer.openEdit,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    task: bindActionCreators(isOpen, dispatch),
    group: bindActionCreators(group, dispatch),
    groupEdit: bindActionCreators(groupEdit, dispatch),
    groupDelete: bindActionCreators(groupDelete, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
