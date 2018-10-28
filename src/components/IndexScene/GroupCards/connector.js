import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as groupCard from 'src/redux/groupCard/action'
import groupEdit from 'src/redux/groupCard/openEdit/action'
import isOpen from 'src/redux/task/open/action'

const initMapStateToProps = store => ({
  openId: store.openEditTaskReducer.openId,
  openEdit: store.openEditGroupReducer.openEdit,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groupCard: bindActionCreators(groupCard, dispatch),
    groupEdit: bindActionCreators(groupEdit, dispatch),
    task: bindActionCreators(isOpen, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
