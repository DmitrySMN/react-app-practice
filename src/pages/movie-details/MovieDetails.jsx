import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import { Rating, Stack, Typography } from '@mui/material';
import { MovieService } from '../../service/MovieService.js';
import FavoriteButton from '../../components/Favorite-button/FavoriteButton.jsx';

const MovieDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const movie = await MovieService.getMovieById(id);
      setMovie(movie);
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
          <div className={styles.details__items__titleRu}>
            <Typography variant={'h3'} fontWeight={'bold'}>
              {movie.nameRu + ' '}({movie.year})
            </Typography>
          </div>
          <div className={styles.details__items__titleEng}>
            <Typography variant={'h6'}>{movie.nameOriginal}</Typography>
          </div>
          <div className={styles.details__items__favorite}>
            <FavoriteButton id={id} />
          </div>
          <div className={styles.details__items__info}>
            <Typography variant={'h5'} fontWeight={'bold'}>
              Описание
            </Typography>
          </div>
          <div className={styles.details__items__description}>
            <Typography>{movie.description}</Typography>
          </div>
          <div className={styles.details__items__rating}>
            <Typography variant={'h5'} fontWeight={'bold'}>
              Рейтинг фильма
            </Typography>
            <Stack spacing={1}>
              <Rating
                name="movie_rating"
                value={movie.ratingImdb}
                max={10}
                precision={0.5}
                readOnly={true}
              />
            </Stack>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MovieDetails;
