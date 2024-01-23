import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/opertaions';
import * as Yup from 'yup';
import {
  Container,
  Error,
  NavLinkStyled,
  StyledField,
  StyledForm,
  TextWrapper,
} from 'components/CommonStyles';

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
      <Container>
        <StyledForm>
          <h2>CREATE YOUR ACCOUNT</h2>
          <label>
            <StyledField name="name" autoComplete="off" placeholder="Name" />
            <Error component="p" name="name" />
          </label>
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
          <button type="submit">Create</button>
          <TextWrapper>
            <p>Do you already have an account?</p>
            <NavLinkStyled to="/Login">Login</NavLinkStyled>
          </TextWrapper>
        </StyledForm>
      </Container>
    </Formik>
  );
};
