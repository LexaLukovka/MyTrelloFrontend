/* eslint-disable react/jsx-filename-extension,no-underscore-dangle,prefer-destructuring */
import React from 'react'
import { withFormik } from 'formik'
import moment from 'moment'

const formik = withFormik({
  enableReinitialize: true,

  mapPropsToValues: ({ currentTask }) => ({
    dueDates: currentTask ? (currentTask.dueDates || moment(new Date())
      .format('YYYY-MM-DDT20:00')) : '',
  }),

  handleSubmit: (values, { props: { actions, currentGroup, currentTask }, setSubmitting }) => {
    const taskId = currentTask._id
    const groupId = currentGroup._id

    const dueDates = values.dueDates

    actions.task.update({ taskId, groupId, dueDates })
      .then(async () => {
        setSubmitting(false)
        await actions.group.load()
        actions.group.currentTask({ groupId, taskId })
      })
  },

  displayName: 'TaskForm',
})

export default formik
