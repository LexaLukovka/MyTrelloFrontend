/* eslint-disable no-underscore-dangle */
const result = {
  draggableId: this.props.task._id,
  type: 'TYPE',
  reason: 'DROP',
  source: {
    droppableId: this.props.groupId,
    index: 0,
  },
  destination: null,
}
