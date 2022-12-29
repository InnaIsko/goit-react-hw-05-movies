import { Routes, Route } from 'react-router-dom';

import { Home } from '../page/Home/Home';
import { Movies } from '../page/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
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
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
