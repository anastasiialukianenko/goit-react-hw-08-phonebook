import React from "react";
import PropTypes from 'prop-types';
import { DeleteButton } from "components/Emotion.styled";

export const ContactList = ({ filterContacts, handleDelete }) => {
    return(
   <ul>
            {filterContacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number}
            <DeleteButton onClick={() => handleDelete(contact.id)}>Delete</DeleteButton>
            </li>)}
</ul>)
}


ContactList.propTypes = {
    filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDelete:  PropTypes.func.isRequired,
}