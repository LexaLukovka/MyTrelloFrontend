/* eslint-disable react/jsx-filename-extension,no-underscore-dangle,prefer-destructuring */
import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

const formik = withFormik({
  enableReinitialize: true,

  validationSchema: Yup.object()
    .shape({
      title: Yup.string()
        .required('Это поле является обязательным'),
    }),

  mapPropsToValues: ({ currentGroup }) => ({
    title: currentGroup ? (currentGroup.title || '') : '',
  }),

  handleSubmit: (values, { props: { actions, currentGroup, currentTask }, setSubmitting, setErrors }) => {
    const groupId = currentGroup._id
    const title = values.title

    actions.groupCard.update({ groupId, title })
      .then(async () => {
        setSubmitting(false)
        await actions.groupCard.load()
        actions.groupCard.currentGroup(groupId)
        actions.groupEdit.closeEdit()
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },

  displayName: 'TaskForm',
})

export default formik
