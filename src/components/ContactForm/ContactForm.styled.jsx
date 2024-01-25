import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const ContactFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 340px;
  padding-bottom: 40px;
`;

export const StyledContactField = styled(Field)`
  padding: 8px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 100%;
  min-width: 300px;
  height: 40px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;

export const ButtonForm = styled.button`
  width: 306px;
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
`;
