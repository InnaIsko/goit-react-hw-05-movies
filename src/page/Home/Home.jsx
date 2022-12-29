import React, { useState, useEffect } from 'react';
import { ApiFetch } from '../../components/ApiFetch';
import { MoviesList } from 'components/MoviesList/MoviesList';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiFetch().then(data => {
      setMovies([...data.results]);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
}
