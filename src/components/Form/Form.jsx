import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { FormWrap, Input, Button } from "components/Emotion.styled";

export function Form({onSubmit}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

   const handleNameChange = evt => {
       setName(evt.target.value);
    }; 
    
     const handleNumberChange = evt => {
       setNumber(evt.target.value);
    }; 
    
    const handleSubmit = (evt) => {
    evt.preventDefault();
        const contact = { name, number, id: nanoid() };
        onSubmit(contact); 

        setName("");
        setNumber("");
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
              value={number}
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


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}