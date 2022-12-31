import { Routes, Route } from 'react-router-dom';

import { Home } from '../page/Home/Home';
import { Movies } from '../page/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Box } from 'components/Box';
import { LinkStyled } from './App.styled';

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
