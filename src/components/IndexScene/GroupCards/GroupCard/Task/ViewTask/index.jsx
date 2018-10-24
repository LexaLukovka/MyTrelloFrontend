import React from 'react'
import { func, object } from 'prop-types'
import { IconButton, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  task: {
    width: '100%',
    alignSelf: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

const ViewTask = ({ classes, task, clickOpenRefactor, clickOpenDetails }) =>
  <div className={classes.root}>
    <Typography onClick={clickOpenDetails} className={classes.task}>{task.task}</Typography>
    <IconButton onClick={clickOpenRefactor} className={classes.icon}>
      <CreateIcon />
    </IconButton>
  </div>

ViewTask.propTypes = {
  classes: object.isRequired,
  task: object.isRequired,
  clickOpenRefactor: func.isRequired,
  clickOpenDetails: func.isRequired,
}

export default withStyles(styles)(ViewTask)
