import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { FormWrap, Input, Button } from "components/Emotion.styled";

export class Form extends Component {
    state = {
        name: '',
        number: '',
    }

handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  }; 

    
    handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    const contact = { name, number, id: nanoid() };
    this.props.onSubmit(contact); 
    this.setState({
      name: "",
      number: "",
    });
  };

    render() {
        const { name, number } = this.state;
        return <FormWrap onSubmit={this.handleSubmit}>

        <label>
          Name
          <Input
          onChange={this.handleChange}
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
            onChange={this.handleChange}
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
    }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}