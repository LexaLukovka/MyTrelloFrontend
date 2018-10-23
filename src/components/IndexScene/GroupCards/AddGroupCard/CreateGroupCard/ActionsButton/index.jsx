import React from 'react'
import { func, object } from 'prop-types'
import { Button, IconButton, Typography, withStyles } from '@material-ui/core'
import ClearIcon from 'mdi-react/ClearIcon'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
  },
  icon: {
    alignSelf: 'center',
  },
}

const ActionsButton = ({ classes, closeInput }) =>
  <div className={classes.root}>
    <Button type="submit" color="primary">
      <Typography color="primary">Добавить</Typography>
    </Button>
    <IconButton className={classes.icon} onClick={closeInput}>
      <ClearIcon />
    </IconButton>
  </div>

ActionsButton.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
}

export default withStyles(styles)(ActionsButton)
