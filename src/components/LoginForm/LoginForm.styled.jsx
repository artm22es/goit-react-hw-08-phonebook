import { ErrorMessage, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  button {
    width: 100%;
    min-width: 300px;
    height: 40px;
    border: 1px solid grey;
    border-radius: 10px;
    background-color: #6666ff;
    color: white;
    transition: background-color 250ms linear, color 250ms linear;

    &:hover {
      background-color: #9999ff;
      color: #333333;
    }
  }
`;

export const StyledField = styled(Field)`
  padding: 8px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 100%;
  min-width: 300px;
  height: 40px;
  background-color: transparent;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;

export const SignUpBox = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #6666ff;
  transition: color 250ms linear;

  &:hover {
    color: #9999ff;
  }
`;
