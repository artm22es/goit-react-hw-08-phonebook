import styled from 'styled-components';

export const AppContainer = styled.div`
  border-radius: 10px;
  border: 1px solid grey;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  width: 400px;
  height: auto;
  background-color: #fff;
`;

export const NavBox = styled.nav`
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding-bottom: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavBtn = styled.button`
  border: none;
  background-color: transparent;
`;
