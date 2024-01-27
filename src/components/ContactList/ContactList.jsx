import { useDispatch, useSelector } from 'react-redux';
import {
  ContactBox,
  ContactListWrapper,
  ContactText,
} from './ContactList.styled';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { Button, Text } from 'components/CommonStyle';
import { IoMdContact } from 'react-icons/io';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ContactListWrapper>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <ContactBox>
                <IoMdContact size={22} color="#F8F8FF" />
                <ContactText>
                  {contact.name}: {contact.number}
                </ContactText>
              </ContactBox>

              <Button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </Button>
            </li>
          ))}
        </ContactListWrapper>
      ) : (
        <Text>You don't have any contact yet</Text>
      )}
    </>
  );
};
