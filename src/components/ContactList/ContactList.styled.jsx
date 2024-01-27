import styled from 'styled-components';

export const ContactListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 14px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 350px;
  margin: 0;
  gap: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${p => p.theme.colors.secondaryColor};
`;

export const ContactBox = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;
