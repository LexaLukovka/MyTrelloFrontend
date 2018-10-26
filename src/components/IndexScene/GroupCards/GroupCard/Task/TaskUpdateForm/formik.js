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
    task: currentTask.task || '',
  }),

  handleSubmit: (values, { props: { actions, currentGroup, currentTask }, setSubmitting }) => {
    const taskId = currentTask._id
    const groupId = currentGroup._id
    const task = values.task


    actions.task.update({ taskId, groupId, task })
      .then(() => {
        setSubmitting(false)
        actions.taskOpen.closeUpdateTask()
        actions.groupCard.load()
      })
  },

  displayName: 'TaskForm',
})

export default formik
