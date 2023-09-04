import React from "react";

import {Input } from "components/Emotion.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterTerm, setFilterTerm } from "redux/appReducer";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterTerm);

const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(setFilterTerm(newValue));
};
  
   return (<label>Find contacts by name
            <Input type="text" value={filter} onChange={handleInputChange} />
          </label>)
};


