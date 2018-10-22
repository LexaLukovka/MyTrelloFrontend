import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'

const styles = {
  root: {
    padding: '10px 0',
    display: 'flex',
  },

  takeAllSpace: {
    flex: 1,
    alignSelf: 'center',
    padding: '0 15px',
  },
}

const AndDevider = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.takeAllSpace}>
      <hr />
    </div>
    <Typography variant="headline">ИЛИ</Typography>
    <div className={classes.takeAllSpace}>
      <hr />
    </div>
  </div>

AndDevider.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AndDevider)
