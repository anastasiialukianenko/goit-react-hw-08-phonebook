import axios from 'axios';

axios.defaults.baseURL = 'https://64f0c2fa8a8b66ecf77a1a45.mockapi.io';


const fetchContacts = async () => {
    const response = await axios.get('/contacts');

    return response.data;
}

const addContact = async (contact) => { 
  const response = await axios.post('/contacts', contact);

  return response.data;
}

const deleteContact = async (contactID) => {
    const response = await axios.delete(`/contacts/${contactID}`);

    return response.data;
}



const api = { fetchContacts, addContact, deleteContact };

export default api;
