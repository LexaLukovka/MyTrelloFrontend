/* eslint-disable react/jsx-filename-extension,no-underscore-dangle,prefer-destructuring */
import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  enableReinitialize: true,

  validationSchema: Yup.object()
    .shape({
      task: Yup.string()
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: ({ currentTask }) => ({
    task: currentTask ? (currentTask.task || '') : '',
    description: currentTask ? (currentTask.description || '') : '',
  }),

  handleSubmit: (values, { props: { actions, currentGroup, currentTask }, setSubmitting }) => {
    const taskId = currentTask._id
    const groupId = currentGroup._id

    const task = values.task
    const description = values.description

    actions.task.update({ taskId, groupId, task, description })
      .then(async () => {
        setSubmitting(false)
        await actions.group.load()
        actions.group.currentTask({ groupId, taskId })
      })
  },

  displayName: 'TaskForm',
})

export default formik
