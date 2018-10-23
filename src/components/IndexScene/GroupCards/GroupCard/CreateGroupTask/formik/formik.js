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
    console.log(values)
  },
  displayName: 'CreateTask',
})

export default formik
