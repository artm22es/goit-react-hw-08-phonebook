import { NavLinkStyled } from 'components/CommonStyle';

export const AuthNav = () => {
  return (
    <nav>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </nav>
  );
};
