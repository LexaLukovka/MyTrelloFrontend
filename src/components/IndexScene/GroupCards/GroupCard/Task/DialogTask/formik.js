/* eslint-disable react/jsx-filename-extension,no-underscore-dangle,prefer-destructuring */
import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

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

  handleSubmit: (values, { props: { actions, currentTask }, setSubmitting, setErrors }) => {
    const taskId = currentTask._id
    const task = values.task
    const groupId = values.groupId

    actions.task.update({ taskId, groupId, task })
      .then(() => {
        setSubmitting(false)
        actions.task.closeUpdateTask()
        actions.groupCardLoad.load()
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },

  displayName: 'TaskForm',
})

export default formik
