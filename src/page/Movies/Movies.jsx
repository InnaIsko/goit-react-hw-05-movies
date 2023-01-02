import { useSearchParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import { ApiFetchQuery } from 'components/ApiFetch';
import { InputSearch } from 'components/InputSearch/InputSearch';
import { LinkStyled } from './Movie.styled';

export function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  const handlerChange = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  useEffect(() => {
    if (searchQuery) {
      ApiFetchQuery(searchQuery).then(data => {
        setMovies([...data.results]);
      });
    }
  }, [searchQuery]);

  return (
    <>
      <InputSearch onInputChange={handlerChange} />
      {movies && (
        <Box as="ul" display="flex" flexDirection="column">
          {movies.length === 0
            ? alert('OOPS, nothing matched of your search')
            : movies.map(el => (
                <LinkStyled
                  to={`${el.id}`}
                  key={el.id}
                  state={{ from: location }}
                >
                  {el.name ?? el.original_title}
                </LinkStyled>
              ))}
        </Box>
      )}
    </>
  );
}
