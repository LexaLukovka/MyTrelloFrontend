import React from 'react'
import { func, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik'

import ActionsButton from 'components/ActionsButton'

import connector from './connector'

const styles = {
  root: {
    padding: '15px 0 5px',
  },
}

const CreateGroupTask = ({ classes, closeInput }) =>
  <Form>
    <Card className={classes.root}>
      <Field
        name="task"
        component={FormikText}
        placeholder="Введите таску"
      />
      <ActionsButton closeInput={closeInput} />
    </Card>
  </Form>

CreateGroupTask.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
}

const style = withStyles(styles)(CreateGroupTask)
const form = formik(style)

export default connector(form)
