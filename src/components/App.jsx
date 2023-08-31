import React, {useEffect } from "react";
import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContastsList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { addLocalStorageContacts, addContacts, deleteContacts, filterIsChanged, selectContacts,  selectFilter } from '../redux/appReducer'

export function App() {
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();



  useEffect(() => {
    const savedContactsData = localStorage.getItem('contactsData');
    if (savedContactsData) {
      const parsedContactData = JSON.parse(savedContactsData);
      dispatch(addLocalStorageContacts(parsedContactData));
}
  }, [dispatch]);

useEffect(() => {
  if (contacts.length > 0) {
    localStorage.setItem('contactsData', JSON.stringify(contacts));
  }
}, [contacts]);

  
  const handleSubmit = (contact) => {

    const isDuplicate = contacts.some((existingContact) => existingContact.name === contact.name);

    isDuplicate ? alert(`${contact.name} already exists. Please use a different name.`) : dispatch(
    addContacts(contact));
  
  };

  const changeFilter = (evt) => {
    dispatch(filterIsChanged(evt.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact?.name?.toLowerCase().includes(normalizedFilter));
    
  };
  
  const handleDelete = (contactDeleteId) => {
    dispatch(deleteContacts(contactDeleteId));
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