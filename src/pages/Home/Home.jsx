import MovieList from 'components/MovieList/MovieList';
import React, { Suspense } from 'react';


const Home = () => {
  return (
    <> <Suspense>
      <MovieList />
      
      </Suspense>
    </>
  );
};

export default Home;
