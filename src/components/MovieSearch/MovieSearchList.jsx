
import React from 'react';
import { useState, useEffect } from 'react';
import { getFilmName } from 'services/api';
import { Link } from 'react-router-dom';
import css from './MovieSearch.module.css';

const MovieSearchList = (clickSubmit) => {
  const [movieSearch, setMovieSearch] = useState([]);

    useEffect(() => {
        if  (clickSubmit.length > 0)  {
            getFilmName(clickSubmit).then(films => {
                if (films.length > 0) {
                    setMovieSearch(films);
                }
            });
        }
  }, []);

  return (<div className={css.box}>
   
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

export default MovieSearchList;
