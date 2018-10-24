/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import moment from 'moment'
import connector from './connector'

const styles = () => ({
  root: {
    margin: 20,
    cursor: 'pointer',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

class DueDates extends React.Component {
  handleOpenDueDates = () => {
    const { actions } = this.props
    actions.dueDates.openDueDates()
  }

  render() {
    const { classes, currentTask } = this.props
    return (
      <div onClick={this.handleOpenDueDates} className={classes.root}>
        <Typography align="right" variant="subheading">Срок</Typography>
        <Typography color="primary">{moment(currentTask.dueDates)
          .fromNow()}</Typography>
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
