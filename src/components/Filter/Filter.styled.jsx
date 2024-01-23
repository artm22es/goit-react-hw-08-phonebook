import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > input {
    padding: 8px;
    border: 1px solid grey;
    border-radius: 10px;
    width: 100%;
    min-width: 300px;
    height: 40px;
  }
`;
