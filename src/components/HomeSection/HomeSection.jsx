import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { HomeWrapper } from './HomeSection.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const HomeSection = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomeWrapper>
      <h1>PHONEBOOK</h1>

      {isLoggedIn ? <Link to="/contacts">Go to contacts</Link> : <LoginForm />}
    </HomeWrapper>
  );
};
