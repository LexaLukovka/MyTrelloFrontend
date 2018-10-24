import React from 'react'
import { object } from 'prop-types'
import { Button, DialogContent, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'
import PlaylistAddIcon from 'mdi-react/PlaylistAddIcon'
import UpdateIcon from 'mdi-react/UpdateIcon'

import DueDatesForm from './DueDatesForm'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik'

import connector from './connector'

const styles = () => ({
  root: {
    width: '80%',
    marginTop: -20,
  },
  icon: {
    margin: 10,
  },
  block: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    width: '100%',
    paddingTop: 10,
  },
})

const TaskForm = ({ classes }) =>
  <div className={classes.root}>
    <DialogContent>
      <Form>
        <div className={classes.block}>
          <CreateIcon className={classes.icon} />
          <Field
            name="task"
            component={FormikText}
            placeholder="Введите таску"
          />
        </div>
        <div className={classes.block}>
          <PlaylistAddIcon className={classes.icon} />
          <div className={classes.input}>
            <Typography>Описание</Typography>
            <Field
              multiline
              rows={2}
              rowsMax={3}
              name="description"
              component={FormikText}
              placeholder="Введите описание"
            />
          </div>
        </div>
        <Button type="submit" color="primary">
          Сохранить
        </Button>
      </Form>
      <div className={classes.block}>
        <UpdateIcon className={classes.icon} />
        <DueDatesForm />
      </div>
    </DialogContent>
  </div>

TaskForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(TaskForm)))
