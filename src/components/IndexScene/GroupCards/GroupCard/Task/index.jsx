/* eslint-disable no-underscore-dangle */
import React from 'react'
import { object, string } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import ViewTask from './ViewTask'
import DialogTask from './DialogTask'
import TaskUpdateForm from './TaskUpdateForm'

import DialogLogin from 'components/@auth/Dialog/DialogLogin'
import DialogRegister from 'components/@auth/Dialog/DialogRegister'

import connector from './connector'

const styles = () => ({
  root: {
    padding: '5px 20px',
    margin: '10px 0',
  },
})

class Task extends React.Component {
  handleOpenDetails = (groupId, taskId) => {
    const { actions, auth } = this.props
    if (auth.user) {
      actions.group.currentTask({ groupId, taskId })
      actions.taskOpen.openDetailsTask(taskId)
      actions.taskOpenUpdate.closeUpdateTask()
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
    actions.group.currentTask({ groupId, taskId })
    actions.taskOpenUpdate.openUpdateTask(taskId)
  }

  handleCloseRefactor = () => {
    const { actions } = this.props
    actions.taskOpenUpdate.closeUpdateTask()
  }

  handleDelete = async (groupId, taskId) => {
    const { actions } = this.props
    await actions.task.deleteTask(groupId, taskId)
    actions.taskOpenUpdate.closeUpdateTask()
  }

  render() {
    const { classes, auth: { user }, task, groupId, openRefactor, openDetails } = this.props

    return (
      <Card className={classes.root}>
        {
          task._id === openRefactor ?
            <TaskUpdateForm
              user={user}
              onCloseReafactor={this.handleCloseRefactor}
              onDelete={() => this.handleDelete(groupId, task._id)}
            />
            :
            <ViewTask
              user={user}
              task={task}
              clickOpenRefactor={() => this.handleOpenRefactor(groupId, task._id)}
              clickOpenDetails={() => this.handleOpenDetails(groupId, task._id)}
            />
        }
        {user ?
          <DialogTask
            task={task}
            isOpen={task._id === openDetails}
            onClose={this.handleCloseDetails}
            onDelete={() => this.handleDelete(groupId, task._id)}
          />
          :
          <React.Fragment>
            <DialogLogin />
            <DialogRegister />
          </React.Fragment>
        }
      </Card>
    )
  }
}


Task.propTypes = {
  classes: object.isRequired,
  auth: object.isRequired,
  actions: object.isRequired,
  task: object.isRequired,
  openRefactor: string,
  openDetails: string,
  groupId: string.isRequired,
}

Task.defaultProps = {
  openRefactor: null,
  openDetails: null,
}

export default withStyles(styles)(connector(Task))
