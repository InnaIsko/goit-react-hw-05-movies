import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Box } from 'components/Box';
import { LinkStyled } from './App.styled';

export const App = () => {
  return (
    <>
      <Box as="nav" p="20px" boxShadow="box" bg="secondary" width="100%">
        <LinkStyled to="/" end>
          Home
        </LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </Box>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
