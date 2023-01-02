import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

import { ApiFetchName } from 'components/ApiFetch';
import { Item, Span, Img, Title, LinkStyled } from './MovieDetails.styled';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import imgNotFound from '../../img/imgNotFound.jpg';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [visibleLoader, setVisibleLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisibleLoader(true);
    ApiFetchName(movieId)
      .then(data => {
        setMovie(data);
      })
      .finally(() => {
        setVisibleLoader(false);
      });
  }, [movieId]);
  if (!movie) {
    return null;
  }
  const genres = movie.genres.map(genre => genre.name).join(' ~ ');
  const score = movie.vote_average.toFixed(1) * 10;
  const dateYear = movie.release_date.substring(0, 4);

  return (
    <>
      <Loader visible={visibleLoader} />
      <Link to={location.state?.from ?? '/'}> Go Back</Link>
      <Box as="ul" display="flex" alignItems="center">
        <Item>
          <Img
            src={
              movie.poster_path === null
                ? imgNotFound
                : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            }
            alt={movie.original_title ?? movie.name}
          />
        </Item>
        <Box ml="30px">
          <Title>
            {movie.original_title ?? movie.name} ({dateYear})
          </Title>
          <Item>User score: {score}%</Item>
          <Span>Overviev</Span>
          <Item>{movie.overview}</Item>
          <Span>Genres</Span>
          <Item>{genres}</Item>
        </Box>
      </Box>
      <div>
        <h2> Additional information</h2>
        <ul>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}
