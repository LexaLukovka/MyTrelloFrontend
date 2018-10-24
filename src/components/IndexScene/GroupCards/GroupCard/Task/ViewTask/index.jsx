import React from 'react'
import { func, object } from 'prop-types'
import { IconButton, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'

const styles = () => ({
  task: {
    alignSelf: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

const ViewTask = ({ classes, task, clickOpen }) =>
  <React.Fragment>
    <Typography className={classes.task}>{task.task}</Typography>
    <IconButton onClick={clickOpen} className={classes.icon}>
      <CreateIcon />
    </IconButton>
  </React.Fragment>

ViewTask.propTypes = {
  classes: object.isRequired,
  task: object.isRequired,
  clickOpen: func.isRequired,
}

export default withStyles(styles)(ViewTask)
