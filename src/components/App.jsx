import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { Container, Header } from './App.styled';
import HeaderList from './HeaderList/HeaderList';
import Layout from './Layout/Layout';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Container>
      <Header>
        <HeaderList />
      </Header>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":movieId" element={<div>ID</div>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="review" element={<div>Review</div>} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Container>
  );
};
