import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieSearchList.module.css';

const MovieSearchList = ({ value }) => {
  return (
    <div className={css.box}>
      <ul className={css.list}>
        {value.map(({ title, id }) => (
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