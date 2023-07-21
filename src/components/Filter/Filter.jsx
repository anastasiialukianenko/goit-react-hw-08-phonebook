import React from "react";
import PropTypes from 'prop-types';
import {Input } from "components/Emotion.styled";

export const Filter = ({ value, onChange }) => {
   return (<label>Find contacts by name
            <Input type="text" value={value} onChange={onChange} />
          </label>)
}


Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}