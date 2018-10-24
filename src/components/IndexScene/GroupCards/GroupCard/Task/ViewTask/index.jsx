import React from 'react'
import { func, object } from 'prop-types'
import { IconButton, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'
import moment from 'moment'

const styles = theme => ({
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
  after: {
    color: theme.palette.primary.dark,
  },
  before: {
    color: theme.palette.secondary.dark,
  },
})

const ViewTask = ({ classes, user, task, clickOpenRefactor, clickOpenDetails }) => {
  let color
  if (moment(task.dueDates).isAfter()) color = classes.after
  if (moment(task.dueDates).isBefore()) color = classes.before

  return (
    <div>
      <div className={classes.root}>
        <Typography onClick={clickOpenDetails} className={classes.task} variant="subheading">{task.task}</Typography>
        {user &&
          <IconButton onClick={clickOpenRefactor} className={classes.icon}>
            <CreateIcon />
          </IconButton>
        }
      </div>
      {task.dueDates !== '' &&
      <Typography variant="caption" className={color}>{moment(task.dueDates).fromNow()}</Typography>
      }
    </div>
  )
}
ViewTask.propTypes = {
  classes: object.isRequired,
  user: object,
  task: object.isRequired,
  clickOpenRefactor: func.isRequired,
  clickOpenDetails: func.isRequired,
}

ViewTask.defaultProps = {
  user: null,
}

export default withStyles(styles)(ViewTask)
