import React from 'react'
import { func, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik/formik'

import ActionsButton from './ActionsButton'

import connector from './connector'

const styles = {
  root: {
    padding: '10px 0',
    minWidth: 300,
  },
}

const CreateGroupCard = ({ classes, closeInput }) =>
  <Form>
    <Card className={classes.root}>
      <Field
        component={FormikText}
        name="title"
        placeholder="Введите заголовок"
      />
      <ActionsButton closeInput={closeInput} />
    </Card>
  </Form>

CreateGroupCard.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
}

const style = withStyles(styles)(CreateGroupCard)
const form = formik(style)

export default connector(form)
