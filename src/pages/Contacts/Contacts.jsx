import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { AppContainer } from './Contacts.styled';
import { Navigation } from 'components/Navigation/Navigation';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <AppContainer>
        <Navigation />
      </AppContainer>
    </main>
  );
}
