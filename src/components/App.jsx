import { Routes, Route } from 'react-router-dom';

import { Home } from '../page/Home/Home';
import { Movies } from '../page/Movies/Movies';
import { MovieDetails } from './MoviesList/MovieDetails/MovieDetails';
import { Box } from 'components/Box';
import { LinkStyled } from './App.styled';
import { lazy } from 'react';

const Cast = lazy(() => import('./MoviesList/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MoviesList/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Box as="nav" p="20px" boxShadow="box" bg="secondary" width="100%">
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
