import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const ContactFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;

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
  max-width: 100px;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 10px;

  &:hover {
    background-color: gold;
  }
`;
