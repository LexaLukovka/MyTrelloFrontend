import React from 'react'
import { bool, func, object, string } from 'prop-types'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, withStyles } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik'

import connector from './connector'

const styles = () => ({
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const DialogTask = ({ classes, task, isOpen, onClose }) =>
  <Dialog
    open={isOpen}
    onClose={onClose}
  >
    <DialogTitle>Редактирование</DialogTitle>
    <Form>
      <DialogContent>
        <Field
          placeholder="Введите таску"
          name="task"
          component={FormikText}
        />
      </DialogContent>
      <DialogActions className={classes.flex}>
        <Button type="submit" color="primary">
          Сохранить
        </Button>
        <Button onClick={onClose} autoFocus>
          Отмена
        </Button>
      </DialogActions>
    </Form>
  </Dialog>


DialogTask.propTypes = {
  classes: object.isRequired,
  task: string.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}


export default withStyles(styles)(connector(formik(DialogTask)))
