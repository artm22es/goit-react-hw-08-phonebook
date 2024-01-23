import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid grey;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 72px 16px 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: auto;
  background-color: #fffaf0;

  h1 {
    margin: 0 0 50px 0;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  color: black;
  text-decoration: none;
  border: 1px solid tomato;
  border-radius: 6px;
  padding: 2px 4px;
`;
