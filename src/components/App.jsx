import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';
import NoFound from 'pages/NoFound/NoFound';
import MovieID from '../pages/MovieID/MovieID';
import Cast from './Cast/Cast';
import Review from './Reviews/Review';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieID />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NoFound />} />
      </Route>
    </Routes>
  );
};
