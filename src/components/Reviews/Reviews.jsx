import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiFetchReviews } from 'components/ApiFetch';
import { Item, ItemName } from './Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    ApiFetchReviews(movieId).then(data => {
      setReviews(data.results);
      console.log(data.results);
    });
  }, [movieId]);
  console.log();
  if (!reviews) {
    return null;
  }
  return (
    <>
      {reviews.map(review => (
        <ul>
          <ItemName>{review.author}</ItemName>
          <Item>{review.content}</Item>
        </ul>
      ))}
    </>
  );
}
