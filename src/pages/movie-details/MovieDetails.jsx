import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import { Rating, Stack, Typography } from '@mui/material';
import { MovieService } from '../../service/MovieService.js';
import FavoriteButton from '../../components/Favorite-button/FavoriteButton.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import MovieCard from '../../components/Movie-card/MovieCard.jsx';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const MovieDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const movie = await MovieService.getMovieById(id);
      setMovie(movie);
      const similarMovies = await MovieService.getSimilarMoviesById(id);
      setSimilar(similarMovies.slice(0, 5));
    }
    console.log(similar);
    //console.log(movie);
    fetchData();
  }, []);

  return (
    <>
      <main className={styles.container}>
      <div className={styles.back}>
        <Link reloadDocument to="/">
          <button className={styles.back__button}>
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
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
                {movie.nameRu}({movie.year})
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
              <div className={styles.details__items__info__description}>
                <Typography>{movie.description}</Typography>
              </div>
            </div>

            {/*<div className={styles.details__items__rating}>*/}
            {/*  <Typography variant={'h5'} fontWeight={'bold'}>*/}
            {/*    Рейтинг фильма*/}
            {/*  </Typography>*/}
            {/*  <Stack spacing={1}>*/}
            {/*    <Rating*/}
            {/*      name="movie_rating"*/}
            {/*      value={movie.ratingImdb}*/}
            {/*      max={10}*/}
            {/*      precision={0.5}*/}
            {/*      readOnly={true}*/}
            {/*    />*/}
            {/*  </Stack>*/}
            {/*</div>*/}
            <div className={styles.details__items__about}>
              <Typography variant={'h5'} fontWeight={'bold'}>
                О фильме
              </Typography>
              <div>
                <Typography>Год производства {movie.year}</Typography>
              </div>
              <div>
                <Typography></Typography>
              </div>
              <div>
                <Typography></Typography>
              </div>
            </div>
          </section>
          <section className={styles.details__items__actors}>
            <div>
              <Typography variant={'h3'} fontWeight={'bold'} color={'green'}>
                {movie.ratingKinopoisk || movie.ratingImdb}
              </Typography>
              <Typography>
                {movie.ratingKinopoiskVoteCount + ' оценок'}
              </Typography>
            </div>
          </section>
        </div>
        <section className={styles.similar}>
          <div>
            <Typography variant={'h5'}>Возможно вам понравится</Typography>
          </div>
          <div className={styles.similar__items}>
            {similar.map((m) => (
              <MovieCard
                key={m.filmId}
                posterUrl={m.posterUrl}
                title={m.nameRu}
                id={m.filmId}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MovieDetails;
