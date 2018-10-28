/* eslint-disable no-underscore-dangle,prefer-destructuring */
import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      task: Yup.string()
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    task: '',
  }),

  handleSubmit: (values, { props: { actions, currentGroup }, setErrors, setSubmitting }) => {
    const groupId = currentGroup._id
    const task = values.task

    actions.task.create({ groupId, task })
      .then(() => {
        setSubmitting(false)
        actions.openTask.closeOneTask()
        actions.groupCard.load()
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },
  displayName: 'CreateTask',
})

export default formik
