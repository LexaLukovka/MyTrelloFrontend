/* eslint-disable no-underscore-dangle, jsx-a11y/mouse-events-have-key-events */
import React from 'react'
import { number, object, string } from 'prop-types'
import { Card, ClickAwayListener, withStyles } from '@material-ui/core'

import { Draggable } from 'react-beautiful-dnd'

import ViewTask from './ViewTask'
import DialogTask from './DialogTask'
import TaskUpdateForm from './TaskUpdateForm'

import connector from './connector'

const styles = () => ({
  root: {
    padding: '5px 20px',
    margin: '10px 0',
  },
})

class Task extends React.Component {
  state = {
    visibility: null,
  }

  onMouseOver = (taskId) => {
    this.setState({
      visibility: taskId,
    })
  }

  onMouseLeave = () => {
    this.setState({
      visibility: null,
    })
  }

  handleOpenDetails = (groupId, taskId) => {
    const { actions, auth } = this.props
    if (auth.user) {
      actions.groupCard.currentTask({ groupId, taskId })
      actions.taskOpen.openDetailsTask(taskId)
      actions.taskOpen.closeUpdateTask()
    } else {
      actions.dialog.openDialogLogin()
    }
  }

  handleCloseDetails = () => {
    const { actions } = this.props
    actions.taskOpen.closeDetailsTask()
  }

  handleOpenRefactor = (groupId, taskId) => {
    const { actions } = this.props
    actions.groupCard.currentTask({ groupId, taskId })
    actions.taskOpen.openUpdateTask(taskId)
  }

  handleCloseRefactor = () => {
    const { actions } = this.props
    actions.taskOpen.closeUpdateTask()
  }

  handleDelete = async (groupId, taskId) => {
    const { actions } = this.props
    await actions.task.deleteTask(groupId, taskId)
    actions.taskOpen.closeUpdateTask()
  }

  render() {
    const {
      classes,
      auth: { user },
      currentGroup,
      currentTask,
      groupId,
      task,
      index,
      openRefactor,
      openDetails,
    } = this.props

    const { visibility } = this.state
    return (
      <Draggable draggableId={task._id} index={index}>
        {(provided) =>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onMouseOver={() => this.onMouseOver(task._id)}
            onMouseLeave={this.onMouseLeave}
          >
            <Card className={classes.root}>
              {
                task._id === openRefactor ?
                  <ClickAwayListener onClickAway={this.handleCloseRefactor}>
                    <TaskUpdateForm
                      user={user}
                      onCloseReafactor={this.handleCloseRefactor}
                      onDelete={() => this.handleDelete(groupId, task._id)}
                    />
                  </ClickAwayListener>
                  :
                  <ViewTask
                    user={user}
                    task={task}
                    visibility={visibility}
                    clickOpenRefactor={() => this.handleOpenRefactor(groupId, task._id)}
                    clickOpenDetails={() => this.handleOpenDetails(groupId, task._id)}
                  />
              }
              {user &&
              <DialogTask
                task={task}
                currentGroup={currentGroup}
                currentTask={currentTask}
                isOpen={task._id === openDetails}
                onClose={this.handleCloseDetails}
                onDelete={() => this.handleDelete(groupId, task._id)}
              />
              }
            </Card>
          </div>
        }
      </Draggable>
    )
  }
}


Task.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  actions: object.isRequired,
  currentGroup: object.isRequired,
  currentTask: object.isRequired,
  groupId: string.isRequired,
  task: object.isRequired,
  index: number.isRequired,
  openRefactor: string,
  openDetails: string,
}

Task.defaultProps = {
  openRefactor: null,
  openDetails: null,
}

export default withStyles(styles)(connector(Task))
