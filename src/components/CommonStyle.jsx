import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 60px 120px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
  color: ${p => p.theme.colors.secondaryColor};
`;

export const Text = styled.p`
  margin: 0;
  color: ${p => p.theme.colors.secondaryColor};
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: ${p => p.theme.colors.secondaryColor};
  border: 2px solid ${p => p.theme.colors.secondaryColor};
  border-radius: 12px;
  padding: 4px 8px;
  transition: color ${p => p.theme.transition},
    border-color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
    border-color: ${p => p.theme.colors.accentColor};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 6px 12px;
  font-size: 18px;

  text-decoration: none;
  color: ${p => p.theme.colors.secondaryColor};
  font-weight: 600;
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }

  &.active {
    text-decoration: underline solid ${p => p.theme.colors.accentColor} 4px;
    color: ${p => p.theme.colors.accentColor};
  }
`;
