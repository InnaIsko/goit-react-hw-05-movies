import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiFetchCast } from '../../../ApiFetch';
import { Img, Item } from './Cast.styled';
import imgNotFound from '../../../img/imgNotFound.jpg';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    ApiFetchCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
  if (!cast) {
    return null;
  }

  return (
    <>
      {cast.map(actor => (
        <ul key={actor.id}>
          <Item>
            <Img
              src={
                actor.profile_path === null
                  ? imgNotFound
                  : `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              }
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
export default Cast;
