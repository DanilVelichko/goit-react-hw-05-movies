import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieSearchList.module.css';
import PropTypes from 'prop-types';

const MovieSearchList = ({ value }) => {
  return (
    <div className={css.box}>
      <ul className={css.list}>
        {value.map(({ title, id }) => (
          <li className={css.item}>
            <Link className={css.link} to={`${id}`} state={'/movies'} key={id}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieSearchList.propTypes = {
  value: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default MovieSearchList;
