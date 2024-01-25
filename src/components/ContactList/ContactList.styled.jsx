import styled from 'styled-components';

export const ContactSection = styled.div`
  padding: 40px 0;
`;

export const ContactListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonDelete = styled.button`
  max-width: 100px;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 10px;
  margin-left: 20px;
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
