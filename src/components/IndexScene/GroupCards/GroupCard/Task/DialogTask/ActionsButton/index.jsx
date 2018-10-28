import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    alignSelf: 'flex-end',
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px',
    },
  },
  delete: {
    margin: 0,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.main,
    },
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
})

const ActionsButton = ({ classes, onDelete }) =>
  <div className={classes.root}>
    <div className={classes.desktop}>
      <Button onClick={onDelete} className={classes.delete}>
        Удалить
      </Button>
    </div>
    <div className={classes.mobile}>
      <Button fullWidth variant="raised" onClick={onDelete} className={classes.delete}>
        Удалить
      </Button>
    </div>
  </div>

ActionsButton.propTypes = {
  classes: object.isRequired,
  onDelete: func.isRequired,
}

export default withStyles(styles)(ActionsButton)
