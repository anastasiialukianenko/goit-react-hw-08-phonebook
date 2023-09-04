import React from "react";
import { DeleteButton } from "components/Emotion.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, selectContacts, selectFilterTerm, selectIsLoading } from '../../redux/appReducer';


export const ContactList = () => {
const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
     const filter = useSelector(selectFilterTerm);
    const dispatch = useDispatch();
    
const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact?.name?.toLowerCase().includes(normalizedFilter));
  };
    
    return(
        <ul>

            {isLoading && <p>Loading data...</p>}

            {getFilteredContacts().length > 0 && !isLoading && getFilteredContacts().map(contact =>
                <li key={contact.id}>{contact.name}: {contact.phone}
            <DeleteButton onClick={() => dispatch(deleteContacts(contact.id))}>Delete</DeleteButton>
            </li>)}
</ul>)
}


