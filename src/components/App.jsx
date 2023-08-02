import React, { useState, useEffect } from "react";
import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContastsList/ContactList";

export function App() {
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContactsData = localStorage.getItem('contactsData');
    if (savedContactsData) {
      setContacts(JSON.parse(savedContactsData));
    }
  }, []);

  


  useEffect(() => {
        localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts])

  
  const handleSubmit = (contact) => {

    const isDuplicate = contacts.some((existingContact) => existingContact.name === contact.name);

    isDuplicate ? alert(`${contact.name} already exists. Please use a different name.`) :
    setContacts(prevState => [contact, ...prevState] )
  
  };

  const  changeFilter = (evt) => {
    setFilter(evt.currentTarget.value)
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
  };
  
  const handleDelete = (contactDeleteId) => {
    setContacts(prevstate => {
      return prevstate.filter(contact => contact.id !== contactDeleteId);
   })
  }



  return (
    <div>
        <h1>Phonebook</h1>
          <Form onSubmit={handleSubmit}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter}/>
        <ContactList filterContacts={getFilteredContacts()} handleDelete={handleDelete} />
      </div>
  )

}
