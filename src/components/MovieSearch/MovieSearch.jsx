
import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendFilms } from 'services/api';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = () => {
  const [movieSearch, setMovieSearch] = useState([]);

useEffect(() => {
    getTrendFilms().then(films => {
      if (films.length > 0) {
        setMovieSearch(films);
      }
    });
  }, []);

  return (<div className={css.box}>
    <h2 className={css.title}>Trending today</h2>
    <ul className={css.list}> 
      {movieSearch.map(({ title, id }) => (
          <li className={css.item}>
              <Link className={css.link} to={`${id}`} key={id}>
          {title}
          </Link>
        </li>
        
      ))}
    </ul>
    </div>
  );
};

export default MovieList;
