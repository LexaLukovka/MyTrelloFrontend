import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import RegisterForm from './RegisterForm'
import Card from '@material-ui/core/Card/Card'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: 5,
  },
  title: {
    marginTop: theme.spacing.size3,
  },
})

class RegisterScene extends Component {
  componentWillMount() {
    document.title = 'Регистрация'
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.root}>
        <Typography variant="subheading" align="center" className={classes.title}>ЗАРЕГИСТРИРОВАТЬСЯ</Typography>
        <RegisterForm />
      </Card>
    )
  }
}

RegisterScene.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterScene)
