import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { FormWrap, Input, Button } from "components/Emotion.styled";
import { addContacts, selectContacts } from "redux/appReducer";

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

   const handleNameChange = evt => {
       setName(evt.target.value);
    }; 
    
     const handleNumberChange = evt => {
       setPhone(evt.target.value);
    }; 
    
  
  const checkIsDuplicating = (newContactName) => {
    return contacts.some((existingContact) => existingContact.name === newContactName);
  };

   const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContactItem = {
      id: nanoid(),
      name,
      phone,
    };

    if (!checkIsDuplicating(newContactItem.name)) {
      dispatch(addContacts(newContactItem)); 
      setName("");
      setPhone("");
    } else {
      alert(`${newContactItem.name} already exists. Please use a different name.`);
      setName("");
      setPhone("");
    }
  };


    return (
    <FormWrap onSubmit={handleSubmit}>

        <label>
          Name
          <Input
          onChange={handleNameChange}
              type="text"
              value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
          </label>
          
          <label>
            Number
            <Input
            onChange={handleNumberChange}
              type="tel"
              value={phone}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          </label>

        <Button type="submit">Add contact</Button>
        </FormWrap>
)

}

