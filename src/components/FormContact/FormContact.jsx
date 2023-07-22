import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { addContact } from '../../redux/contactsOperations';
import { selectVisibleContacts } from '../../redux/selectors';
import { Input, ButtonAdd, LabelForm, FormBox, BigBoxForm } from './FormContact.styled';
import { PiAddressBookLight } from 'react-icons/pi';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name is invalid')
    .required('Name is required'),
  number: yup
    .string()
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
    .required('Phone number is required'),
});

const initialValue = {
  name: '',
  number: '',
};

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = (newContact, { resetForm }) => {
    const existingContactByName = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const existingContactByNumber = contacts.find(
      (contact) => contact.number === newContact.number
    );

    if (existingContactByName) {
      toast.error('A contact with this name already exists!');
      return;
    }

    if (existingContactByNumber) {
      toast.error('A contact with this number already exists!');
      return;
    }

    dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleFormSubmit}>
      <Form autoComplete='off'>
        <BigBoxForm>
        <FormBox>
          <LabelForm>
            The name of the new contact
            <Input
              type='text'
              name='name'
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelForm>
          <LabelForm>
            Phone number
            <Input
              type='tel'
              name='number'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              required
            />
          </LabelForm>
        </FormBox>
        <ButtonAdd type='submit'>
            <PiAddressBookLight />
            Add contact
          </ButtonAdd>
        </BigBoxForm>
      </Form>
    </Formik>
  );
};

export default FormContact;