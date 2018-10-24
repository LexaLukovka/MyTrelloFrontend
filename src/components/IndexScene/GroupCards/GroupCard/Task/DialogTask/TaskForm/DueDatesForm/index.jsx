import React from 'react'
import { bool, object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

import { Field, Form } from 'formik'
import FormikText from '../formik/FormikText'
import formik from './formik'

import connector from '../connector'

const styles = () => ({
  root: {},
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
})

class DueDatesForm extends React.Component {
  handleOpen = () => {
    const { actions } = this.props
    actions.dueDates.openDueDates()
  }

  handleClose = () => {
    const { actions } = this.props
    actions.dueDates.closeDueDates()
  }

  render() {
    const { classes, openDueDates } = this.props

    return (
      <Form>
        <Button variant="outlined" onClick={this.handleOpen}>Сроки выполнения</Button>
        {openDueDates &&
        <React.Fragment>
          <Field
            name="dueDates"
            type="datetime-local"
            component={FormikText}
            placeholder="Введите дату и время"
          />
          <div className={classes.flex}>
            <Button color="primary" type="submit">Изменить сроки</Button>
            <Button onClick={this.handleClose}>Закрыть</Button>
          </div>
        </React.Fragment>
        }
      </Form>
    )
  }
}


DueDatesForm.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  openDueDates: bool.isRequired,
}

export default withStyles(styles)(connector(formik(DueDatesForm)))
