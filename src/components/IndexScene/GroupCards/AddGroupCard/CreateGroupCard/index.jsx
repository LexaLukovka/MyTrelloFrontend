import React from 'react'
import { func, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import { Field } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik/formik'

const styles = {
  root: {
    padding: '10px 30px',
  },
}

const CreateGroupCard = ({ classes, closeInput }) =>
  <Card className={classes.root} onClose={closeInput}>
    <Field
      component={FormikText}
      name="title"
      placeholder="Введите заголовок"
    />
  </Card>

CreateGroupCard.propTypes = {
  classes: object.isRequired,
  closeInput: func.isRequired,
}

export default withStyles(styles)(formik(CreateGroupCard))
