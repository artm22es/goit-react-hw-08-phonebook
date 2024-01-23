import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/opertaions';
import * as Yup from 'yup';
import {
  Error,
  NavLinkStyled,
  SignUpBox,
  StyledField,
  StyledLoginForm,
} from './LoginForm.styled';

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

    dispatch(logIn({ email, password }));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={onSubmitForm}
    >
      <StyledLoginForm>
        <label>
          <StyledField
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
          <Error component="p" name="email" />
        </label>
        <label>
          <StyledField
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
          <Error component="p" name="password" />
        </label>
        <button type="submit">Log in</button>
        <SignUpBox>
          <p>Don't have an account?</p>
          <NavLinkStyled to="/register">Signup</NavLinkStyled>
        </SignUpBox>
      </StyledLoginForm>
    </Formik>
  );
};
