import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { getMovieByKeyWords } from '../../api/getMovieByKeyWords.js';
import { BeatLoader } from 'react-spinners';
import MovieCard from '../Movie-card/MovieCard.jsx';
import { getPremiereMovies } from '../../api/getPremiereMovies.js';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [season, setSeason] = useState();
  const [loading, setLoading] = useState(true);

  const handleSeasonChange = () => {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 800);
    const fetchData = async () => {
      const data = await getPremiereMovies();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.main}>
          {/*<div className={styles.main__search}>*/}
          {/*  <div className={styles["main__search-wrapper"]}>*/}
          {/*    <input*/}
          {/*      className={styles["main__search-field"]}*/}
          {/*      type="text"*/}
          {/*      placeholder={"Название фильма"}*/}
          {/*      value={title}*/}
          {/*      onChange={(event) => {*/}
          {/*        setTitle(event.target.value);*/}
          {/*      }}*/}
          {/*    />*/}
          {/*    <button*/}
          {/*      className={styles["main__search-button"]}*/}
          {/*      type={"submit"}*/}
          {/*      onClick={handleInput}*/}
          {/*    >*/}
          {/*      Найти*/}
          {/*    </button>*/}
          {/*  </div>*/}

          {/*  <DensityMediumIcon sx={{ height: 50 }} />*/}
          {/*</div>*/}

          <div className={styles['main__title-content']}>
            <Typography>
              <h2>Премьеры в феврале 2025</h2>
            </Typography>
            <FormControl sx={{ width: '300px' }}>
              <InputLabel id="demo-simple-select-label">Сезон</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={season}
                label="Сезон"
                onChange={handleSeasonChange}
              >
                <MenuItem value={'Январь 2025'}>Январь 2025</MenuItem>
                <MenuItem value={'Декабрь 2024'}>Декабрь 2024</MenuItem>
                <MenuItem value={'Ноябрь 2024'}>Ноябрь 2024</MenuItem>
              </Select>
            </FormControl>
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
