import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchInput from 'components/MovieSearchInput/MovieSearchInput';
import MovieSearchList from 'components/MovieSearchList/MovieSearchList';
import { getFilmName } from 'services/api';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilmList, setShowFilmList] = useState(false);
  const [noFindFilms, setnoFindFilms] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [movieName, setMovieName] = useState('');

  useEffect(() => {
    if (!shouldLoad) return;

    if (!searchParams.get('search')) {
      setShowFilmList(false);
      setnoFindFilms(false);
      Notiflix.Notify.info('Please enter the film name');
      return;
    } else {
      if (searchParams.get('search').length > 0) {
        getFilmName(searchParams.get('search')).then(films => {
          if (films.length === 0) {
            setShowFilmList(false);
            setnoFindFilms(true);
          }

          if (films.length > 0) {
            setMovieName(films);
            setShowFilmList(true);
            setnoFindFilms(false);
          }
        });
      }
    }
  }, [searchParams, shouldLoad]);

  return (
    <>
      <MovieSearchInput setInput={setSearchParams} setLoad={setShouldLoad} />
      <Suspense>
        {showFilmList && <MovieSearchList value={movieName} />}
        {noFindFilms && <h5>No Films find</h5>}
      </Suspense>
    </>
  );
};

export default Movies;
