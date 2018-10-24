import React from 'react'
import { func, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
  delete: {
    color: theme.palette.secondary.dark,
  },
})

const ActionsButton = ({ classes, onDelete, onClose }) =>
  <div className={classes.root}>
    <Button onClick={onDelete} className={classes.delete}>
      Удалить
    </Button>
    <Button onClick={onClose} autoFocus>
      Отмена
    </Button>
  </div>

ActionsButton.propTypes = {
  classes: object.isRequired,
  onClose: func.isRequired,
  onDelete: func.isRequired,
}

export default withStyles(styles)(ActionsButton)
