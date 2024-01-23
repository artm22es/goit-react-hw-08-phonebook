import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/opertaions';
import * as Yup from 'yup';
import {
  Container,
  Error,
  NavLinkStyled,
  StyledField,
  StyledForm,
  TextWrapper,
} from 'components/CommonStyles';

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
      <Container>
        <StyledForm>
          <h1>PHONEBOOK</h1>
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
          <TextWrapper>
            <p>Don't have an account?</p>
            <NavLinkStyled to="/register">Signup</NavLinkStyled>
          </TextWrapper>
        </StyledForm>
      </Container>
    </Formik>
  );
};
