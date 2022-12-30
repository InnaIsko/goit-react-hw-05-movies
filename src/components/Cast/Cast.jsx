import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiFetchCast } from '../ApiFetch';
import { Img, Item } from './Cast.styled';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    ApiFetchCast(movieId).then(data => {
      setCast(data.cast);
      console.log(data.cast);
    });
  }, [movieId]);
  console.log();
  if (!cast) {
    return null;
  }

  return (
    <>
      {cast.map(actor => (
        <ul>
          <Item>
            <Img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
          </Item>
          <Item>{actor.name}</Item>
          <Item>Character: {actor.character}</Item>
        </ul>
      ))}
    </>
  );
}
