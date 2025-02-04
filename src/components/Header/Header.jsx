import styles from './Header.module.css';
import TheatersIcon from '@mui/icons-material/Theaters';
import Button from '@mui/material/Button';
import { ReactTyped } from 'react-typed';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByKeyWords } from '../../api/getMovieByKeyWords.js';
import Store from '../../store/store.js';

const Header = () => {
  const headers = ['Фильмы', 'Афиша', 'Цены', 'Адрес', 'О нас'];
  const [searchMovies, setSearchMovies] = useState([]);
  const [input, setInput] = useState('');

  const store = new Store();

  const handleInput = async (value) => {
    if (value) {
      setInput(value);
      setSearchMovies(await getMovieByKeyWords(input));
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
                  <span>{localStorage.getItem('email')}</span>

                  <Button
                    onClick={() => {
                      store.logout();
                      window.location.reload()
                    }}
                    sx={{ color: 'white', margin: 0 }}
                    variant="outlined"
                  >
                    <Typography>Выйти</Typography>
                  </Button>
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
                onChange={(e) => handleInput(e.target.value)}
              />

              {searchMovies ? (
                <div className={styles['header__search-results']}>
                  <ul>
                    {searchMovies.map((m) => (
                      <div
                        className={styles['header__search-results__item']}
                        key={m.filmId}
                      >
                        <div>
                          <Box
                            sx={{ width: 40 }}
                            component={'img'}
                            src={m.posterUrl}
                          />
                        </div>
                        <div>
                          {m.nameRu}
                          <br />
                          <span style={{ color: 'lawngreen' }}>{m.rating}</span>
                          <span>{' ' + m.year + 'г.'}</span>
                          <span>{' ' + m.genres[0].genre.toUpperCase()}</span>
                        </div>
                      </div>
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
