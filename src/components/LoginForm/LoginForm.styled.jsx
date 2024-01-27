import { Field, Form } from 'formik';
import styled from 'styled-components';

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 28px 14px;
  gap: 30px;
  width: 400px;

  label {
    width: 100%;
  }
`;

export const StyledField = styled(Field)`
  background-color: transparent;
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: 6px;
  height: 30px;
  padding: 4px 8px;
  width: 100%;
  color: ${p => p.theme.colors.secondaryColor};

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.accentColor};
  }

  &::placeholder {
    color: ${p => p.theme.colors.secondaryColor};
  }
`;

export const StyledBtn = styled.button`
  background-color: transparent;
  font-size: 20px;
  font-weight: 600;
  color: ${p => p.theme.colors.secondaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: 12px;
  padding: 8px 16px;
  transition: color ${p => p.theme.transition},
    border-color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
    border-color: ${p => p.theme.colors.accentColor};
  }
`;
