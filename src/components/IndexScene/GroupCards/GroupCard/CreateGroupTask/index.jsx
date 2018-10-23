import React from 'react'
import { func, object, string } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik/formik'

import ActionsButton from './ActionsButton'

import connector from './connector'

const styles = {
  root: {
    padding: '15px 0 5px',
  },
}

const CreateGroupTask = ({ classes, closeInput, setFieldValue, groupId }) =>
  <Form>
    <Card className={classes.root}>
      <Field
        component={FormikText}
        name="task"
        placeholder="Введите таску"
      />
      <ActionsButton setFieldValue={setFieldValue} groupId={groupId} closeInput={closeInput} />
    </Card>
  </Form>

CreateGroupTask.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
  setFieldValue: func.isRequired,
  groupId: string.isRequired,
}

const style = withStyles(styles)(CreateGroupTask)
const form = formik(style)

export default connector(form)
