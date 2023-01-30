import MovieList from 'components/MovieList/MovieList';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
          <MovieList />
          <Outlet />
      
      </>
  );
};

export default Home;
