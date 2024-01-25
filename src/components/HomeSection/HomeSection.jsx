import { useAuth } from 'hooks/useAuth';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Contacts from 'pages/Contacts/Contacts';

export const HomeSection = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <Contacts /> : <LoginForm />}</>;
};
