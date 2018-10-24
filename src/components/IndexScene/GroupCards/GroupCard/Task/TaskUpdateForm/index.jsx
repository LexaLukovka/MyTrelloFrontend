import React from 'react'
import { func, object } from 'prop-types'
import { Button, IconButton, withStyles } from '@material-ui/core'
import DeleteIcon from 'mdi-react/DeleteIcon'

import FormikText from './formik/FormikText'
import { Field, Form } from 'formik'
import formik from './formik'

import connector from './connector'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
  },
  icon: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    color: theme.palette.secondary.dark,
  },
})

const TaskUpdateForm = ({ classes, onCloseReafactor, onDelete }) =>
  <Form>
    <div className={classes.root}>
      <Field
        placeholder="Введите таску"
        name="task"
        component={FormikText}
      />
      <IconButton onClick={onDelete} className={classes.icon}>
        <DeleteIcon />
      </IconButton>
    </div>
    <div className={classes.flex}>
      <Button type="submit" color="primary">
        Сохранить
      </Button>
      <Button onClick={onCloseReafactor}>
        Отмена
      </Button>
    </div>
  </Form>

TaskUpdateForm.propTypes = {
  classes: object.isRequired,
  onDelete: func.isRequired,
  onCloseReafactor: func.isRequired,
}

export default withStyles(styles)(connector(formik(TaskUpdateForm)))
