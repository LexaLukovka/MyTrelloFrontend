/* eslint-disable no-underscore-dangle */
import React from 'react'
import { object, string } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import ViewTask from './ViewTask'
import TaskForm from './TaskForm'
import connector from './connector'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 20px',
    margin: '10px 0',
  },
})

class Task extends React.Component {
  handleClickOpen = (groupId, taskId) => {
    const { actions } = this.props
    actions.group.currentTask({ groupId, taskId })
    actions.taskOpen.openUpdateTask(taskId)
  }

  handleClose = () => {
    const { actions } = this.props
    actions.taskOpen.closeUpdateTask()
  }

  handleDelete = async (groupId, taskId) => {
    const { actions } = this.props
    await actions.task.deleteTask(groupId, taskId)
    actions.taskOpen.closeUpdateTask()
  }

  render() {
    const { classes, task, groupId, openDialog } = this.props

    return (
      <Card className={classes.root}>
        {
          task._id === openDialog ?
            <TaskForm
              onClose={this.handleClose}
              onDelete={() => this.handleDelete(groupId, task._id)}
            />
            :
            <ViewTask
              task={task}
              clickOpen={() => this.handleClickOpen(groupId, task._id)}
            />
        }
      </Card>
    )
  }
}


Task.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  task: object.isRequired,
  openDialog: string,
  groupId: string.isRequired,
}

Task.defaultProps = {
  openDialog: null,
}

export default withStyles(styles)(connector(Task))
