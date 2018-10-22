import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      title: Yup.string()
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    title: '',
  }),

  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(values)
  },
  displayName: 'CreateGroupCard',
})

export default formik
