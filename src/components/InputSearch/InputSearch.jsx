import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormBtn, Input } from './InputSearch.styled';

export function InputSearch({ onInputChange }) {
  const [value, setValue] = useState('');
  const handlerChange = e => {
    setValue(e.target.value);
  };

  const handleSabmit = e => {
    e.preventDefault();

    onInputChange(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSabmit}>
      <FormBtn type="submit">
        <span>Search</span>
      </FormBtn>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handlerChange}
        value={value}
      />
    </Form>
  );
}
InputSearch.propTypes = { onInputChange: PropTypes.func.isRequired };
