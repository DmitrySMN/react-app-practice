import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { BeatLoader } from 'react-spinners';
import MovieCard from '../Movie-card/MovieCard.jsx';
import { Link } from 'react-router-dom';
import { MovieService } from '../../service/MovieService.js';

const Main = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [seasonYear, setSeasonYear] = useState(2025);
  const [seasonMonth, setSeasonMonth] = useState(
    months[new Date().getMonth()].toUpperCase(),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
    const fetchData = async () => {
      const data = await MovieService.getPremiereMovies(
        seasonYear,
        seasonMonth,
      );
      setMovies(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(!loading);
    // }, 800);
    const fetchData = async () => {
      const data = await MovieService.getPremiereMovies(
        seasonYear,
        seasonMonth,
      );
      setMovies(data);
    };
    fetchData();
  }, [seasonMonth, seasonYear]);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.main}>
          <div className={styles['main__title-content']}>
            <Typography>
              <h2>График премьер премьер</h2>
            </Typography>
            <div>
              <FormControl sx={{ width: '200px', paddingRight: '10px' }}>
                <InputLabel id="season-year-label">Год</InputLabel>
                <Select
                  labelId="season-year-label"
                  id="season-year"
                  value={seasonYear}
                  label="Год"
                  onChange={(e) => {
                    setSeasonYear(e.target.value);
                  }}
                >
                  <MenuItem value={2025}>2025</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2019}>2019</MenuItem>
                  <MenuItem value={2018}>2018</MenuItem>
                  <MenuItem value={2017}>2017</MenuItem>
                  <MenuItem value={2016}>2016</MenuItem>
                  <MenuItem value={2015}>2015</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: '200px' }}>
                <InputLabel id="season-month-label">Месяц</InputLabel>
                <Select
                  labelId="season-month-label"
                  id="season-month"
                  value={seasonMonth}
                  label="Месяц"
                  onChange={(e) => {
                    setSeasonMonth(e.target.value);
                  }}
                >
                  <MenuItem value={'JANUARY'}>Январь</MenuItem>
                  <MenuItem value={'FEBRUARY'}>Февраль</MenuItem>
                  <MenuItem value={'MARCH'}>Март</MenuItem>
                  <MenuItem value={'APRIL'}>Апрель</MenuItem>
                  <MenuItem value={'MAY'}>Май</MenuItem>
                  <MenuItem value={'JUNE'}>Июнь</MenuItem>
                  <MenuItem value={'JULY'}>Июль</MenuItem>
                  <MenuItem value={'AUGUST'}>Август</MenuItem>
                  <MenuItem value={'SEPTEMBER'}>Сентябрь</MenuItem>
                  <MenuItem value={'OCTOBER'}>Октябрь</MenuItem>
                  <MenuItem value={'NOVEMBER'}>Ноябрь</MenuItem>
                  <MenuItem value={'DECEMBER'}>Декабрь</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {loading ? (
            <div className={styles.main__loading}>
              <BeatLoader loading={loading} />
            </div>
          ) : (
            <div className={styles.main__items}>
              {movies.map((m) => (
                <MovieCard
                  key={m.kinopoiskId}
                  posterUrl={m.posterUrl}
                  title={m.nameRu}
                  genres={m.genres}
                  year={m.premiereRu}
                  id={m.kinopoiskId}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Main;
