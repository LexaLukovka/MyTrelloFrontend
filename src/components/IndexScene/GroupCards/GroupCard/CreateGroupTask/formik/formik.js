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

  handleSubmit: (values, { props: { actions }, setErrors, setSubmitting }) => {
    actions.task.create(values)
      .then(() => {
        setSubmitting(false)
        actions.openTask.closeOneTask()
        actions.groupCardLoad.load()
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },
  displayName: 'CreateTask',
})

export default formik
