import React from 'react'
import { bool, func, object } from 'prop-types'
import { Dialog, DialogTitle, IconButton, withStyles } from '@material-ui/core'
import ClearIcon from 'mdi-react/ClearIcon'

import GroupTitle from './GroupTitle'
import DueDates from './DueDates'
import TaskForm from './TaskForm'
import ActionsButton from './ActionsButton'

const styles = (theme) => ({
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexCustom: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  icon: {
    margin: 10,
  },
})

const DialogTask = ({ classes, currentGroup, currentTask, task, isOpen, onClose, onDelete }) =>
  <Dialog
    open={isOpen}
    onClose={onClose}
    fullWidth
  >
    <div className={classes.flex}>
      <DialogTitle>Редактирование</DialogTitle>
      <IconButton className={classes.icon} onClick={onClose}><ClearIcon /></IconButton>
    </div>
    <div className={classes.flexCustom}>
      <GroupTitle currentGroup={currentGroup} />
      {currentTask.dueDates && <DueDates currentTask={currentTask} />}
    </div>
    <div className={classes.flexCustom}>
      <TaskForm />
      <ActionsButton onDelete={onDelete} />
    </div>
  </Dialog>

DialogTask.propTypes = {
  classes: object.isRequired,
  currentGroup: object.isRequired,
  currentTask: object.isRequired,
  task: object.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  onDelete: func.isRequired,
}


export default withStyles(styles)(DialogTask)
