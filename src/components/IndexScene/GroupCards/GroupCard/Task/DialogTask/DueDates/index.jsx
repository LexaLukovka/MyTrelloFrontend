/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import moment from 'moment'
import connector from './connector'

const styles = theme => ({
  root: {
    margin: 20,
    cursor: 'pointer',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  after: {
    color: theme.palette.primary.dark,
  },
  before: {
    color: theme.palette.secondary.dark,
  },
})

class DueDates extends React.Component {
  handleOpenDueDates = () => {
    const { actions } = this.props
    actions.dueDates.openDueDates()
  }

  render() {
    const { classes, currentTask } = this.props

    let color
    if (moment(currentTask.dueDates).isAfter()) color = classes.after
    if (moment(currentTask.dueDates).isBefore()) color = classes.before

    return (
      <div onClick={this.handleOpenDueDates} className={classes.root}>
        <Typography align="right" variant="subheading">Срок</Typography>
        {currentTask.dueDates !== '' &&
        <Typography className={color}>{moment(currentTask.dueDates).fromNow()}</Typography>
        }
      </div>
    )
  }

}

DueDates.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  currentTask: object.isRequired,
}

export default withStyles(styles)(connector(DueDates))
