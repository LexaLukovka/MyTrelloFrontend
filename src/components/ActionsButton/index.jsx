import React from 'react'
import { func, object } from 'prop-types'
import { Button, CardActions, IconButton, Typography, withStyles } from '@material-ui/core'
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
  button: {
    padding: 5,
  },
}

const ActionsButton = ({ classes, closeInput }) =>
  <CardActions className={classes.root} disableActionSpacing>
    <Button
      size="small"
      type="submit"
      color="primary"
      className={classes.button}
    >
      <Typography color="primary" variant="body2">Добавить</Typography>
    </Button>
    <IconButton className={classes.icon} onClick={closeInput}>
      <ClearIcon />
    </IconButton>
  </CardActions>

ActionsButton.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
}

export default withStyles(styles)(ActionsButton)
