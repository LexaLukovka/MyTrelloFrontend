import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as group from 'src/redux/groupCard/action'
import groupEdit from 'src/redux/groupCard/openEdit/action'

const initMapStateToProps = store => ({
  currentGroup: store.groupCardReducer.currentGroup,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    groupCard: bindActionCreators(group, dispatch),
    groupEdit: bindActionCreators(groupEdit, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
