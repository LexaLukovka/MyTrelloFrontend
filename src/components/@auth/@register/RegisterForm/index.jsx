/* eslint-disable react/sort-comp,padded-blocks,no-console */
import React from 'react'
import { bool, func } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'

import { Field } from 'formik'
import FormikText from 'components/@auth/formik/FormikText'
import FormikPassword from 'components/@auth/formik/FormikPassword'

import formik from './formik'
import connector from '../../connector'

const RegisterForm = ({ isSubmitting, handleSubmit }) =>
  <form onSubmit={handleSubmit}>
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
    <Link to="/auth/login">
      <Typography style={{ paddingTop: 5 }} gutterBottom align="center">Есть аккаунт?</Typography>
    </Link>
  </form>

RegisterForm.propTypes = {
  handleSubmit: func.isRequired,
  isSubmitting: bool.isRequired,
}

export default connector(withRouter(formik(RegisterForm)))
