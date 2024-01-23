import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const HomeSection = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <Link to="/contacts">Go to contacts</Link> : <LoginForm />}
    </>
  );
};
