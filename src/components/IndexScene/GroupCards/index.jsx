/* eslint-disable no-underscore-dangle,no-confusing-arrow,no-return-assign */
import React from 'react'
import { array, object, string } from 'prop-types'
import { withStyles } from '@material-ui/core'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import GroupCard from './GroupCard'
import AddGroupCard from './AddGroupCard'

import isEmpty from 'lodash-es/isEmpty'
import connector from './connector'

const styles = () => ({
  root: {
    display: 'flex',
  },
})

class GroupCards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      groupCard: props.groupCard,
    }
  }

  onDragEnd = (result) => {
    const { actions } = this.props
    const { groupCard } = this.state
    const { destination, source, draggableId, type } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'groupCard') {
      this.changeGroup(actions, groupCard, draggableId, source, destination)
      return
    }

    this.changeTasksInOtherGroup(actions, groupCard, draggableId, source, destination)
  }

  changeGroup = (actions, groupCard, draggableId, source, destination) => {
    const newGroupCard = groupCard

    let currentGroup = {}
    groupCard.filter(group => group._id === draggableId && (currentGroup = group))

    newGroupCard.splice(source.index, 1)
    newGroupCard.splice(destination.index, 0, currentGroup)

    const newState = {
      ...this.state,
      groupCard: newGroupCard,
    }

    this.setState(newState)

    newGroupCard.map((group, index) => group.index = index)

    actions.groupCard.save({ newGroupCard })
  }

  changeTasksInOtherGroup = (actions, groupCard, draggableId, source, destination) => {
    let startGroup = {}
    let startIndex = ''
    groupCard.filter((group, index) =>
      group._id === source.droppableId && (startGroup = group) && (startIndex = index))

    let finishGroup = {}
    let finishIndex = ''
    groupCard.filter((group, index) =>
      group._id === destination.droppableId && (finishGroup = group) && (finishIndex = index))


    if (startGroup === finishGroup) {
      this.changeInOneGroup(actions, startGroup, startIndex, draggableId, source, destination)
      return
    }


    let startCurrentTask = {}
    startGroup.tasks.filter(task => task._id === draggableId && (startCurrentTask = task))
    startGroup.tasks.splice(source.index, 1)

    finishGroup.tasks.splice(destination.index, 0, startCurrentTask)

    const newState = {
      ...this.state,
      groupCard: {
        ...this.state.groupCard,
        [startIndex]: startGroup,
        [finishIndex]: finishGroup,
      },
    }

    this.setState([newState])

    actions.groupCard.save({ startGroup, finishGroup })
  }

  changeInOneGroup = (actions, startGroup, startIndex, draggableId, source, destination) => {
    let currentTask = {}
    startGroup.tasks.filter(task => task._id === draggableId && (currentTask = task))

    startGroup.tasks.splice(source.index, 1)
    startGroup.tasks.splice(destination.index, 0, currentTask)


    const newState = {
      ...this.state,
      groupCard: {
        ...this.state.groupCard,
        [startIndex]: startGroup,
      },
    }

    this.setState([newState])

    actions.groupCard.save({ startGroup })
  }

  handleEditGroupCard = (groupId) => {
    const { actions } = this.props
    actions.groupCard.currentGroup(groupId)
    actions.groupEdit.openEdit(groupId)
  }

  handleCloseEdit = () => {
    const { actions } = this.props
    actions.groupEdit.closeEdit()
  }

  handleDeleteGroupCard = (groupId) => {
    const { actions } = this.props
    actions.groupCard.deleteGroup(groupId)
  }

  handleOpenInput = async (groupId) => {
    const { actions } = this.props
    actions.groupCard.currentGroup(groupId)
    await actions.task.openOneTask(groupId)
  }

  handleCloseInput = () => {
    const { actions } = this.props
    actions.task.closeOneTask()
  }


  render() {
    const { classes, user, openId, openEdit } = this.props
    const { groupCard } = this.state

    return (
      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="all-groupCard"
            direction="horizontal"
            type="groupCard"
          >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={classes.root}
              >
                {!isEmpty(groupCard) &&
                groupCard.map((group, index) =>
                  <GroupCard
                    key={group._id}
                    index={index}

                    user={user}
                    groupId={group._id}

                    title={group.title}
                    tasks={group.tasks}

                    openEdit={openEdit}
                    openId={openId}

                    onCloseEdit={this.handleCloseEdit}
                    onOpenEdit={() => this.handleEditGroupCard(group._id)}
                    onDelete={() => this.handleDeleteGroupCard(group._id)}

                    onCreateTask={() => this.handleOpenInput(group._id)}
                    onCloseCreateTasks={this.handleCloseInput}
                  />)
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {user && <AddGroupCard />}

      </div>
    )
  }
}

GroupCards.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  user: object,
  groupCard: array.isRequired,
  openId: string,
  openEdit: string,
}

GroupCards.defaultProps = {
  user: null,
  openId: null,
  openEdit: null,
}

export default withStyles(styles)(connector(GroupCards))
