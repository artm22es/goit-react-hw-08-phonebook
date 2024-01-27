import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 600px;
  padding-bottom: 20px;

  input {
    width: 100%;
    background-color: transparent;
    border: 2px solid ${p => p.theme.colors.secondaryColor};
    border-radius: 6px;
    height: 30px;
    padding: 4px 8px;
    color: ${p => p.theme.colors.secondaryColor};

    &:focus {
      outline: none;
      border-color: ${p => p.theme.colors.accentColor};
    }

    &::placeholder {
      color: ${p => p.theme.colors.secondaryColor};
    }
  }
`;
