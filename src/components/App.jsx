import React, { Component } from "react";
import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContastsList/ContactList";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount() {
    const saveContactsData = localStorage.getItem('contactsData');

    this.setState({ contacts: saveContactsData ? JSON.parse(saveContactsData) : [] });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contactsData', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (contact) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some((existingContact) => existingContact.name === contact.name);
    isDuplicate ? alert(`${contact.name} already exists. Please use a different name.`) : this.setState((prevState) => (
      { contacts: [contact, ...prevState.contacts], }));
  };

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value })
  };

  getFilteredContacts = () => {
  const { contacts, filter } = this.state;
   const normalizedFilter = filter.toLowerCase();
  return  contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  
  handleDelete = (contactDeleteId) => {
  this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactDeleteId)
    }))

  }
  
  render() {
    const { filter, } = this.state;
    const filterContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
          <Form onSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList filterContacts={filterContacts} handleDelete={this.handleDelete} />
      </div>
    );
  };
}