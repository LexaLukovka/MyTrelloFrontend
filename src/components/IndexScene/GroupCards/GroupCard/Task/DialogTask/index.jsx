import React from 'react'
import { bool, func, object } from 'prop-types'
import { Dialog, DialogTitle, withStyles } from '@material-ui/core'

import TaskForm from './TaskForm'
import ActionsButton from './ActionsButton'
import DueDates from './DueDates'

const styles = () => ({
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const DialogTask = ({ classes, task, isOpen, onClose, onDelete }) =>
  <Dialog
    open={isOpen}
    onClose={onClose}
    fullWidth
  >
    <div className={classes.flex}>
      <DialogTitle>Редактирование</DialogTitle>
      <DueDates />
    </div>
    <div className={classes.flex}>
      <TaskForm />
      <ActionsButton onClose={onClose} onDelete={onDelete} />
    </div>
  </Dialog>

DialogTask.propTypes = {
  classes: object.isRequired,
  task: object.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  onDelete: func.isRequired,
}


export default withStyles(styles)(DialogTask)
