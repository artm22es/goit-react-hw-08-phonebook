import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/opertaions';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too short name!')
    .max(30, 'Too long name!')
    .required('Required'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (values, helpers) => {
    const { name, email, password } = values;

    dispatch(register({ name, email, password }));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={onSubmitForm}
    >
      <Form>
        <h2>Register</h2>
        <label>
          Name
          <Field name="name" autoComplete="off" />
          <ErrorMessage component="p" name="name" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
