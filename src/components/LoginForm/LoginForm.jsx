import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/opertaions';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .min(5, 'Too short email!')
    .max(50, 'Too long email!')
    .required('Required'),
  password: Yup.string()
    .trim()
    .min(8, 'Too short password!')
    .max(50, 'Too long password!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (values, helpers) => {
    const { email, password } = values;

    dispatch(login({ email, password }));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={onSubmitForm}
    >
      <Form>
        <h2>Log in</h2>
        <label>
          Email
          <Field type="email" name="email" autoComplete="off" />
          <ErrorMessage component="p" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" autoComplete="off" />
          <ErrorMessage component="p" name="password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
