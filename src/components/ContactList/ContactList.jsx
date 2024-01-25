import { useDispatch, useSelector } from 'react-redux';
import {
  ContactListWrapper,
  ButtonDelete,
  ContactSection,
  StyledSpan,
} from './ContactList.styled';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { RxAvatar } from 'react-icons/rx';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ContactSection>
      <h3>Contacts</h3>
      <ContactListWrapper>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <StyledSpan>
              <RxAvatar />
              {contact.name}: {contact.number}
            </StyledSpan>
            <ButtonDelete onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </ButtonDelete>
          </li>
        ))}
      </ContactListWrapper>
    </ContactSection>
  );
};
