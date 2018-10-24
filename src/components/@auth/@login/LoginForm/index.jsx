/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import { bool, object } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from 'components/@auth/formik/FormikText'
import FormikPassword from 'components/@auth/formik/FormikPassword'

import formik from './formik'
import connector from '../../connector'

class LoginForm extends React.Component {
  openDialogRegister = () => {
    const { actions } = this.props
    actions.dialog.closeDialogLogin()
    actions.dialog.openDialogRegister()
  }

  render() {
    const { dialogLogin, isSubmitting } = this.props
    return (
      <Form>
        <CardContent>
          <Field
            label="Email"
            component={FormikText}
            name="email"
            type="email"
            placeholder="email@example.com"
          />
          <Field
            label="Пароль"
            name="password"
            component={FormikPassword}
            placeholder="*******"
          />
        </CardContent>
        <CardActions>
          <Button fullWidth variant="raised" type="submit" color="primary" disabled={isSubmitting}>
            <Typography color="secondary">Войти</Typography>
          </Button>
        </CardActions>
        {dialogLogin ?
          <Typography
            gutterBottom
            align="center"
            style={{ paddingTop: 5 }}
            onClick={this.openDialogRegister}
          >
            Нет аккаунта?
          </Typography>
          :
          <Link to="/auth/register">
            <Typography style={{ paddingTop: 5 }} gutterBottom align="center">Нет аккаунта?</Typography>
          </Link>
        }
      </Form>
    )
  }
}

LoginForm.propTypes = {
  actions: object.isRequired,
  dialogLogin: bool.isRequired,
  isSubmitting: bool.isRequired,
}

export default connector(withRouter(formik(LoginForm)))
