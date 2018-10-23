import React from 'react'
import { object } from 'prop-types'
import { Card, Typography, withStyles } from '@material-ui/core'

const styles = () => ({
  root: {
    padding: '5px 20px',
    margin: '10px 0',
  },
})

const Task = ({ classes, task }) =>
  <Card className={classes.root}>
    <Typography>{task.task}</Typography>
  </Card>

Task.propTypes = {
  classes: object.isRequired,
  task: object.isRequired,
}

export default withStyles(styles)(Task)
