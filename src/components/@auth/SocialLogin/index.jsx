/* eslint-disable max-len */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { Button, withStyles } from '@material-ui/core'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'
import connector from '../connector'
import { withRouter } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
  },
  googleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },

  facebookButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  text: {
    flexGrow: 1,
    paddingLeft: 5,
    textAlign: 'center',
    color: 'white',
  },
}

class SocialLogin extends Component {
  componentClicked = () => {

  }
  loginFacebook = async FBuser => {
    const { actions, history } = this.props
    await actions.auth.facebook(FBuser)
    history.push('/')
  }

  loginGoogle = Guser => {
    const { actions, history } = this.props
    actions.auth.google(Guser)
    history.push('/')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <FacebookLogin
          appId="737379293302751"
          fields="name,email"
          onClick={this.componentClicked}
          callback={this.loginFacebook}
          render={props => (
            <Button
              fullWidth
              onClick={props.onClick}
              className={classes.facebookButton}
              variant="raised"
              color="primary"
            >
              <FacebookBoxIcon style={{ color: 'white' }} />
              <div className={classes.text}>Facebook</div>
            </Button>
          )}
        />
        <GoogleLogin
          clientId="15309820637-pgbp42f56ft65q8cabp9jjaq5gsvnj7b.apps.googleusercontent.com"
          fields="name,email"
          render={props => (
            <Button
              onClick={props.onClick}
              fullWidth
              className={classes.googleButton}
              variant="raised"
              color="primary"
            >
              <GoogleIcon style={{ color: 'white' }} />
              <div className={classes.text}>Google</div>
            </Button>
          )}
          onFailure={this.loginGoogle}
          onSuccess={this.loginGoogle}
        />
      </div>
    )
  }
}

SocialLogin.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(withRouter(SocialLogin)))
