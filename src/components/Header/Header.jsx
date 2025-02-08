import styles from './Header.module.css';
import TheatersIcon from '@mui/icons-material/Theaters';
import Button from '@mui/material/Button';
import { ReactTyped } from 'react-typed';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Store from '../../store/store.js';
import { MovieService } from '../../service/MovieService.js';

const Header = () => {
  const headers = ['Премьеры', 'Актеры', 'Поиск', 'О нас'];
  const [searchMovies, setSearchMovies] = useState([]);
  const [input, setInput] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const store = new Store();

  const handleInput = async (value) => {
    if (value) {
      setInput(value);
      setSearchMovies(await MovieService.getMovieByKeyWords(input));
      console.log(searchMovies);
    } else {
      setInput('');
      setSearchMovies([]);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <a href="" className={styles.logo}>
              <TheatersIcon />
            </a>
            <ul className={styles.navlist}>
              {headers.map((h) => (
                <Typography sx={{ padding: 0 }}>
                  <li className={styles.navlist__item}>
                    <a href="">{h}</a>
                  </li>
                </Typography>
              ))}
            </ul>
            <div className={styles.login}>
              {localStorage.getItem('token') ? (
                <div>
                  <Link to="/profile">
                    <span>{localStorage.getItem('email')}</span>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <Button sx={{ color: 'white', margin: 0 }} variant="outlined">
                    <Typography>Войти</Typography>
                  </Button>
                </Link>
              )}
            </div>
          </nav>
          <div className={styles.header__content}>
            <Typography variant="h3">
              <p className={styles.header__title}>
                <ReactTyped
                  strings={['Все что вы хотели знать о кинемотографе']}
                  typeSpeed={40}
                />
              </p>
            </Typography>
            <div className={styles.header__search}>
              <input
                className={styles['header__search-input']}
                type="text"
                placeholder={'Введите название фильма'}
                value={input}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
                onChange={(e) => handleInput(e.target.value)}
              />

              {searchActive ? (
                <div className={styles['header__search-results']}>
                  <ul>
                    {searchMovies.map((m) => (
                      <Link key={m.filmId} to={`/movies/${m.kinopoiskId}`}>
                        <div className={styles['header__search-results__item']}>
                          <div>
                            <Box
                              sx={{ width: 40 }}
                              component={'img'}
                              src={m.posterUrl}
                            />
                          </div>
                          <div style={{ color: 'black' }}>
                            {m.nameRu}
                            <br />
                            <span style={{ color: 'lightseagreen' }}>
                              {m.rating}
                            </span>
                            <span>{' ' + m.year + 'г.'}</span>
                            <span>{' ' + m.genres[0].genre.toUpperCase()}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            {/*<Button*/}
            {/*  style={{*/}
            {/*    width: 150,*/}
            {/*    height: 50,*/}
            {/*  }}*/}
            {/*  variant="contained"*/}
            {/*>*/}
            {/*  Кнопка*/}
            {/*</Button>*/}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
