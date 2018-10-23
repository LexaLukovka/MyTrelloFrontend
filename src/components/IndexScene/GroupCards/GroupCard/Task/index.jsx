/* eslint-disable no-underscore-dangle */
import React from 'react'
import { bool, object, string } from 'prop-types'
import { Card, IconButton, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'
import DialogTask from './DialogTask'
import connector from './connector'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 20px',
    margin: '10px 0',
  },
  task: {
    alignSelf: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

class Task extends React.Component {
  handleClickOpen = (taskId) => {
    const { actions } = this.props
    actions.group.currentTask(taskId)
    actions.task.openUpdateTask()
  }

  handleClose = () => {
    const { actions } = this.props
    actions.task.closeUpdateTask()
  }

  render() {
    const { classes, task, groupId, openDialog } = this.props

    return (
      <Card className={classes.root}>
        <Typography className={classes.task}>{task.task}</Typography>
        <IconButton
          onClick={() => this.handleClickOpen(task._id)}
          className={classes.icon}
        >
          <CreateIcon />
        </IconButton>
        <DialogTask task={task.task} groupId={groupId} isOpen={openDialog} onClose={this.handleClose} />
      </Card>
    )
  }
}

Task.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  task: object.isRequired,
  openDialog: bool.isRequired,
  groupId: string.isRequired,
}

export default withStyles(styles)(connector(Task))
