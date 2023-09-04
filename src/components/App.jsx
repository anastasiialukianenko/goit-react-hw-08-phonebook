import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContastsList/ContactList";

import { requestContacts, selectError } from '../redux/appReducer';


export function App() {

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <div>
        <h1>Phonebook</h1>
          <Form/>
        <h2>Contacts</h2>
        <Filter/>
      <ContactList/>
      {!!error && <div>{error.message}</div>}
      </div>
  )

}