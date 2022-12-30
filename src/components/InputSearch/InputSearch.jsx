import React, { useState, useEffect } from 'react';

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
    <form onSubmit={handleSabmit}>
      <button type="submit">
        <span>Search</span>
      </button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handlerChange}
        value={value}
      />
    </form>
  );
}
