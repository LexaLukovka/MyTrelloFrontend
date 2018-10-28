import React from 'react'
import { func, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import ActionsButton from 'components/ActionsButton'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik'

import connector from './connector'

const styles = () => ({
  root: {
    padding: 10,
  },
  card: {
    padding: '15px 0 5px',
  },
})

const EditGroupCard = ({ classes, closeInput }) =>
  <div className={classes.root}>
    <Card className={classes.card}>
      <Form>
        <Field
          name="title"
          component={FormikText}
          placeholder="Введите заголовок"
        />
        <ActionsButton closeInput={closeInput} />
      </Form>
    </Card>
  </div>

EditGroupCard.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
}

export default withStyles(styles)(connector(formik(EditGroupCard)))
