import React, { useState, useEffect } from 'react';
import { ApiFetch } from '../../components/ApiFetch';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    setVisibleLoader(true);
    ApiFetch()
      .then(data => {
        setMovies([...data.results]);
      })
      .finally(() => {
        setVisibleLoader(false);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <Loader visible={visibleLoader} />
      <MoviesList movies={movies} />
    </>
  );
}
