/* eslint-disable react/jsx-filename-extension,no-underscore-dangle,prefer-destructuring */
import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

const formik = withFormik({
  enableReinitialize: true,

  validationSchema: Yup.object()
    .shape({
      task: Yup.string()
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: ({ currentTask }) => ({
    task: currentTask ? (currentTask.task || '') : '',
    dueDates: currentTask ? (currentTask.dueDates || moment(new Date()).format('YYYY-MM-DDT17:00')) : '',
    description: currentTask ? (currentTask.description || '') : '',
  }),

  handleSubmit: (values, { props: { actions, currentGroup, currentTask }, setSubmitting }) => {
    const taskId = currentTask._id
    const groupId = currentGroup._id

    const task = values.task
    const description = values.description
    const dueDates = values.dueDates

    actions.task.update({ taskId, groupId, task, description, dueDates })
      .then(async () => {
        setSubmitting(false)
        await actions.groupCard.load()
        actions.groupCard.currentTask({ groupId, taskId })
      })
  },

  displayName: 'TaskForm',
})

export default formik
