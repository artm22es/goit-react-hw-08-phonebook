import { NavLinkStyled } from 'components/CommonStyle';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLinkStyled to="/">HOME</NavLinkStyled>

      {isLoggedIn && <NavLinkStyled to="/contacts">CONTACTS</NavLinkStyled>}
    </nav>
  );
};
