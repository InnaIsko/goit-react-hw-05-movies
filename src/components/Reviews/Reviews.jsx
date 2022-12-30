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
    });
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  return (
    <>
      {reviews.map(review => (
        <ul key={review.id}>
          <ItemName>{review.author}</ItemName>
          <Item>{review.content}</Item>
        </ul>
      ))}
    </>
  );
}
// review.length < 1 ? (
//           <p>We don't have any reviews for this movie.</p>
