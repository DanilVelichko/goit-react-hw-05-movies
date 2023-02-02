import { useState, useEffect } from 'react';
import { getMovieReview } from 'services/api';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMovieReview(movieId);
      setReview(result);
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <ul>
        {review && review.length > 0 && (
          <li className={css.item}>
            <p>{review}</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default Review;
