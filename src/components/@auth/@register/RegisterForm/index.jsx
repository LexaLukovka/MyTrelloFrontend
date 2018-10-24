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

class RegisterForm extends React.Component {
  openDialogLogin = () => {
    const { actions } = this.props
    actions.dialog.closeDialogRegister()
    actions.dialog.openDialogLogin()
  }

  render() {
    const { dialogRegister, isSubmitting } = this.props
    return (
      <Form>
        <CardContent>
          <Field
            label="Имя и фамилия"
            component={FormikText}
            name="name"
            type="name"
            placeholder="Вася Пупкин"
          />
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
            <Typography color="secondary">Зарегистрироваться</Typography>
          </Button>
        </CardActions>
        {dialogRegister ?
          <Typography
            gutterBottom
            align="center"
            style={{ paddingTop: 5 }}
            onClick={this.openDialogLogin}
          >
            Есть аккаунт?
          </Typography>
          :
          <Link to="/auth/login">
            <Typography style={{ paddingTop: 5 }} gutterBottom align="center">Есть аккаунт?</Typography>
          </Link>
        }
      </Form>
    )
  }
}

RegisterForm.propTypes = {
  actions: object.isRequired,
  dialogRegister: bool.isRequired,
  isSubmitting: bool.isRequired,
}

export default connector(withRouter(formik(RegisterForm)))
