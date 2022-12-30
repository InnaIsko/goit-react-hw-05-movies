import { Link, Outlet, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ApiFetchQuery } from 'components/ApiFetch';
import { InputSearch } from 'components/InputSearch/InputSearch';

export function Movies() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const handlerChange = value => {
    setSearch(value);
    setSearchParams({ query: value });
  };
  useEffect(() => {
    if (search) {
      ApiFetchQuery(search).then(data => {
        console.log(data.results);
        setMovies([...data.results]);
      });
    }
  }, [search]);

  return (
    <>
      <InputSearch onInputChange={handlerChange} />
      {movies && (
        <ul>
          {movies.map(el => (
            <Link key={el.id}>{el.name ?? el.original_title}</Link>
          ))}
        </ul>
      )}

      <Outlet />
    </>
  );
}
