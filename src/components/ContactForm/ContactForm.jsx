import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { Formik } from 'formik';
import {
  ContactFormWrapper,
  ButtonForm,
  Error,
  StyledContactField,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format!'
    )
    .min(3, 'Too short contact name!')
    .max(50, 'Too long contact name!')
    .required('Required'),
  phone: Yup.string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format!'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = (values, helpers) => {
    if (contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('This person already exists');
      helpers.resetForm();
      return;
    }

    dispatch(addContact(values));
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={ContactSchema}
      onSubmit={onSubmitForm}
    >
      <ContactFormWrapper>
        <label>
          <StyledContactField
            name="name"
            autoComplete="off"
            placeholder="Name"
            required
          />
          <Error component="p" name="name" />
        </label>
        <label>
          <StyledContactField
            type="tel"
            autoComplete="off"
            name="phone"
            placeholder="Phone"
            required
          />
          <Error component="p" name="phone" />
        </label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </ContactFormWrapper>
    </Formik>
  );
};
