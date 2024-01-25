import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { AppContainer, NavBox, NavBtn, NavList } from './Contacts.styled';
import { IoMdAdd } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { logOut } from '../../redux/auth/opertaions';
import { ContactList } from 'components/ContactList/ContactList';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const [addContactForm, setAddContactForm] = useState(false);
  const [addFilter, setAddFilter] = useState(false);
  const persistedContacts = useSelector(selectFilteredContacts);

  const handleAddBtn = () => setAddContactForm(!addContactForm);
  const handleFilterBtn = () => setAddFilter(!addFilter);
  const handleLogoutBtn = () => dispatch(logOut());

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <AppContainer>
        <div>
          <NavBox>
            <h3>Phonebook</h3>
            <NavList>
              <li>
                <NavBtn type="button" onClick={handleAddBtn}>
                  <IoMdAdd size={30} />
                </NavBtn>
              </li>
              <li>
                <NavBtn type="button" onClick={handleFilterBtn}>
                  <FaSearch size={20} />
                </NavBtn>
              </li>
              <li>
                <NavBtn type="button" onClick={handleLogoutBtn}>
                  <MdLogout size={25} />
                </NavBtn>
              </li>
            </NavList>
          </NavBox>
        </div>
        {addContactForm && <ContactForm />}
        {addFilter && <Filter />}
        {persistedContacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>You don't have any contact yet</p>
        )}
      </AppContainer>
    </main>
  );
}
