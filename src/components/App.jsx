import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContastsList/ContactList";

import { requestContacts, addContacts, deleteContacts, setFilterTerm, selectContacts, selectFilterTerm, selectIsLoading, selectError } from '../redux/appReducer';
import { nanoid } from "@reduxjs/toolkit";

export function App() {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterTerm);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);


   const checkIsDuplicating = contact => {
    return contacts.some((existingContact) => existingContact.name === contact.name);
   }
  
 const handleAddContact = newContactData => {
    const newContactItem = {
      id: nanoid(),
      ...newContactData,
    };

     if (!checkIsDuplicating(newContactItem)) { 
      dispatch(addContacts(newContactItem));
    } else { alert(`${newContactItem.name} already exists. Please use a different name.`) }};

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  }


  const handleFilterContactByName = (evt) => {
    dispatch(setFilterTerm(evt.currentTarget.value))
  }

 
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact?.name?.toLowerCase().includes(normalizedFilter));
  };
  




  return (
    <div>
        <h1>Phonebook</h1>
          <Form onSubmit={handleAddContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterContactByName}/>
      <ContactList
          filterContacts={getFilteredContacts()}
          isLoading={isLoading}
          onDelete={handleDeleteContact}
      />
      {!!error && <div className="error">{error.message}</div>}
      </div>
  )

}