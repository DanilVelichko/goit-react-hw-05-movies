import { useState, useEffect, Suspense } from 'react';
import { getFilmDetails } from 'services/api';
import {  useParams } from 'react-router-dom';
import css from './Cast.module.css';


const Cast = () => {
  const { movieId } = useParams();
  const [castDetail, setCastDetail] = useState({});
  const { cast } = castDetail;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilmDetails(movieId);
      setCastDetail(result);
    
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
        {cast &&
          cast.length > 0 &&
          cast.map(({ name, photo, character }) => {
            return (
              <li className={css.item} key={name}>
                <img src={photo} alt={name} className={css.image} />
                <div>
                  <p>Actor: {name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}</Suspense>
      </ul>
    </>
  );
};

export default Cast;

