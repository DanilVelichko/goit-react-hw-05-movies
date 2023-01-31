import MovieList from 'components/MovieList/MovieList';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <MovieList />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
