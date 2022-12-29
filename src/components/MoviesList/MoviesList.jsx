import { LinkStyled } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <LinkStyled to={`movies/${movie.id}`} key={movie.id}>
          {movie.original_title ?? movie.name}
        </LinkStyled>
      ))}
    </ul>
  );
};
