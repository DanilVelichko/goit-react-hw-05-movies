import { useState, useEffect } from 'react';
import { getFilmDetails } from 'services/api';
import { Link, useParams, useLocation } from 'react-router-dom';
import css from './MovieID.module.css';
import { Outlet } from 'react-router-dom';

const MovieID = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const { title, image, score, overview, genres } = filmDetails;
  const { movieId } = useParams();

  const location = useLocation();

  console.log('LOCATION', location);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilmDetails(movieId);
      setFilmDetails(result);
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Link to={location.state ?? '/'}>
        <button className={css.back_button}>Back</button>
      </Link>

      <div className={css.hero_box}>
        <img src={image} alt={title} className={css.image} />
        <div className={css.hero_info}>
          <h3 className={css.title}> {title}</h3>

          <p className={css.score}>User Score: {score}</p>

          <p className={css.overview}>Overview</p>
          <p className={css.overview_text}>{overview}</p>

          <p className={css.genres_title}>Genres</p>
          <p>{genres}</p>
        </div>
      </div>
      <div className={css.line}></div>
      <div className={css.additional_box}>
        <p className={css.additional_title}>Additional information</p>
        <div className={css.additional_list}>
          <Link to={'cast'} className={css.additional_item}>
            Cast
          </Link>
          <Link to={'review'} className={css.additional_item}>
            Reviews
          </Link>
        </div>
      </div>
      <div className={css.line}></div>

      <Outlet />
    </>
  );
};

export default MovieID;
