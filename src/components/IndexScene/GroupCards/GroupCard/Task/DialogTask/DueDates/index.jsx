/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import moment from 'moment'

const styles = theme => ({
  root: {
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 20,
    },
  },
  title: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  after: {
    color: theme.palette.primary.dark,
  },
  before: {
    color: theme.palette.secondary.dark,
  },
})

const DueDates = ({ classes, currentTask }) => {
  let color
  if (moment(currentTask.dueDates).isAfter()) color = classes.after
  if (moment(currentTask.dueDates).isBefore()) color = classes.before

  return (
    <div className={classes.root}>
      <Typography className={color}>{moment(currentTask.dueDates)
        .fromNow()}</Typography>
    </div>
  )
}


DueDates.propTypes = {
  classes: object.isRequired,
  currentTask: object.isRequired,
}

export default withStyles(styles)(DueDates)
