import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../api/getMovieById.js';
import styles from './MovieDetails.module.css';
import { Typography } from '@mui/material';

const MovieDetails = () => {
  const location = useLocation();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const movie = await getMovieById(location.pathname.split('/')[2]);
      setMovie(movie);
      console.log(movie);
    }
    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.details}>
        <div className={styles.details__poster}>
          <img
            className={styles.details__poster__img}
            src={movie.posterUrl}
            alt=""
          />
        </div>
        <section className={styles.details__items}>
          <div className={styles.details__items__title}>
            <Typography variant={'h3'} fontWeight={'bold'}>
              {movie.nameRu}
            </Typography>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MovieDetails;
