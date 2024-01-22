import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export const HomeSection = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <img src="" alt="Welcome" />
      <h1>Welcome to Phonebook!</h1>
      <p>
        Welcome to a Phonebook project! Register now and get started using this
        app. The app give an access to add and store all your contacts, you can
        login and logout.
      </p>

      {isLoggedIn ? (
        <Link to="/contacts">Go to contacts</Link>
      ) : (
        <Link to="/register">Get started</Link>
      )}
    </div>
  );
};
