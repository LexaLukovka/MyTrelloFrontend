import React from 'react'
import { bool, func, node, object } from 'prop-types'
import { Dialog, withStyles } from '@material-ui/core'
import AuthDevider from 'components/@auth/AndDevider'
import SocialLogin from 'components/@auth/SocialLogin'

const styles = theme => ({
  root: {
    height: '100%',
    padding: '0 5px',
    minHeight: 500,
    maxWidth: 500,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    padding: 30,
    background: theme.palette.secondary.light,
  },
  devider: {
    flexGrow: 1,
  },
  social: {
    flexGrow: 2,
  },
})

const DialogScene = ({ classes, children, isOpen, onClose }) =>
  <Dialog
    open={isOpen}
    onClose={onClose}
    fullWidth
    className={classes.root}
  >
    <div className={classes.container}>
      {children}
      <div className={classes.devider}>
        <AuthDevider />
      </div>
      <div className={classes.social}>
        <SocialLogin />
      </div>
    </div>
  </Dialog>


DialogScene.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}

export default withStyles(styles)(DialogScene)
