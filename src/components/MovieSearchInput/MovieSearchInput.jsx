import React from 'react';
import Input from '@mui/material/Input';
import css from './MovieSearchInput.module.css'


const MovieSearchInput = ({ setInput, setLoad }) => {


  const handleSubmit = e => {
    e.preventDefault();
    
    setInput({ search: e.target[0].value });
    setLoad(true);
    
    console.dir(e.target[0].value)
      e.target[0].value = '';
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />

        <button type="submit" className={css.button}>
          <span>Search</span>
        </button>
      </form>

      
    </>
  );
};

export default MovieSearchInput;
