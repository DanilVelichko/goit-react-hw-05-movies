import { useState, useEffect } from 'react';
import { getFilmDetails } from 'services/api';
import { useParams } from 'react-router-dom';
import css from './Review.module.css';

const Review = () => {
  const { movieId } = useParams();
  const [reviewDetail, setReviewDetail] = useState({});
  const { review } = reviewDetail;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilmDetails(movieId);
      setReviewDetail(result);
      console.log(result);
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
