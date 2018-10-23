import { withFormik } from 'formik'
import * as Yup from 'yup'
import transformValidationApi from 'utils/transformValidationApi'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      title: Yup.string()
        .required('Это поле является обязательным'),
    }),
  mapPropsToValues: () => ({
    title: '',
  }),

  handleSubmit: (values, { props: { actions }, setErrors, setSubmitting }) => {
    actions.groupCard.create(values)
      .then(() => {
        setSubmitting(false)
        actions.groupCardLoad.load()
      })
      .catch(errors => {
        setSubmitting(false)
        setErrors(transformValidationApi(errors))
      })
  },
  displayName: 'CreateGroupCard',
})

export default formik
