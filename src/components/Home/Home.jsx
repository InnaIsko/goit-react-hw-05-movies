import React, { useState, useEffect } from 'react';
import { ApiFetch } from '../ApiFetch';

export function Home() {
  const [movies, setMovies] = useState([]);

  const API_KEY = '54c00021c1f0a4ca812033181f98909b';

  useEffect(() => {
    ApiFetch(API_KEY).then(data => {
      setMovies(prevMovies => {
        return [...data.results];
      });
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.original_title ?? movie.name}</li>
        ))}
      </ul>
    </div>
  );
}
