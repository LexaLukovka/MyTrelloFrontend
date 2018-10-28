import React from 'react'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import CreateIcon from 'mdi-react/CreateIcon'
import PlaylistAddIcon from 'mdi-react/PlaylistAddIcon'
import UpdateIcon from 'mdi-react/UpdateIcon'

import { Field, Form } from 'formik'
import FormikText from './formik/FormikText'
import formik from './formik'

import connector from './connector'

const styles = (theme) => ({
  root: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  container: {
    padding: 20,
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
    <div className={classes.container}>
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
          <UpdateIcon className={classes.icon} />
          <Field
            name="dueDates"
            type="datetime-local"
            component={FormikText}
            placeholder="Введите дату и время"
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
        <div className={classes.desktop}>
          <Button type="submit" color="primary">
            Сохранить
          </Button>
        </div>
        <div className={classes.mobile}>
          <Button type="submit" fullWidth variant="raised" color="primary">
            <Typography color="secondary">Сохранить</Typography>
          </Button>
        </div>
      </Form>
    </div>
  </div>

TaskForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(TaskForm)))
