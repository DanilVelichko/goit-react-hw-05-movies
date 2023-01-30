import React, { useState } from 'react';
import Input from '@mui/material/Input';
import MovieSearch from '../MovieSearch/MovieSearchList';

const MovieSearchInput = ({ clickSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();
      console.log(input)

      clickSubmit(input);
      
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={handleChange}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      <MovieSearch  clickSubmit={input}/>
    </>
  );
};

export default MovieSearchInput;
