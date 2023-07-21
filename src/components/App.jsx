import React from "react";
import ContactList from "./ContactList";
import FilterContacts from "./FilterContacts";
import FormContact from "./FormContact";
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';


export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactList />
      <Toaster />
    </Container>
  );
}