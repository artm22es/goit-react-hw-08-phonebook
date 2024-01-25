import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Contacts from 'pages/Contacts/Contacts';

export const HomeSection = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <Contacts /> : <LoginForm />}</>;
};
