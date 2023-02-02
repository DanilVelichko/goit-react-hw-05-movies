import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from '../pages/Home/Home';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';
import NoFound from 'pages/NoFound/NoFound';
import MovieID from '../pages/MovieID/MovieID';

const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Review'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieID />}>
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {' '}
                <Cast />{' '}
              </Suspense>
            }
          />

          <Route
            path="review"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {' '}
                <Review />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Route>
    </Routes>
  );
};
