import React from "react";
import PropTypes from 'prop-types';
import { DeleteButton } from "components/Emotion.styled";

export const ContactList = ({ filterContacts, isLoading, onDelete}) => {
    return(
        <ul>
            {isLoading && <p>Loading data...</p>}

            {filterContacts.length > 0 && !isLoading && filterContacts.map(contact =>
                <li key={contact.id}>{contact.name}: {contact.number}
            <DeleteButton onClick={() => onDelete(contact.id)}>Delete</DeleteButton>
            </li>)}
</ul>)
}

ContactList.propTypes = {
    filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}


