import { useEffect, useState } from 'react';
import axios from 'axios';
import Store from '../../store/store.js';
import MovieCard from '../../components/Movie-card/MovieCard.jsx';
import { Typography } from '@mui/material';
import LogoutButton from '../../components/Logout-button/LogoutButton.jsx';
import styles from './Profile.module.css';
import { MovieService } from '../../service/MovieService.js';

const Profile = () => {
  const [user, setUser] = useState();
  const [movies, setMovies] = useState([]);
  const store = new Store();
  const authHeader = 'Bearer ' + localStorage.getItem('token');
  const [movieObjs, setMovieObjs] = useState([]);
  const objs = [];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/users/me', {
          headers: { authorization: authHeader },
          withCredentials: true,
        });
        const user = response.data;
        setUser(user);
      } catch (e) {
        store.logout();
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchMoviesData() {
      const moviesResponse = await axios.get(
        'http://localhost:3000/api/users/favorites',
        {
          headers: { authorization: authHeader },
        },
      );
      setMovies(moviesResponse.data.favorites);
    }
    fetchMoviesData();
  }, []);

  useEffect(() => {
    async function mapMovies() {
      for (let i = 0; i < movies.length; i++) {
        objs[i] = await MovieService.getMovieById(movies[i]);
      }
      setMovieObjs(objs);
    }
    mapMovies();
    console.log(movieObjs);
  }, [movies]);

  return (
    <div className={styles.container}>
      {user ? (
        <div>
          <div className={styles.profile__header}>
            <Typography variant={'h4'}>
              Вы авторизованы как {user.username}
            </Typography>
            <LogoutButton />
          </div>
          <Typography variant={'h6'}>Ваши избранные фильмы</Typography>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              rowGap: '15px',
              paddingTop: '30px',
            }}
          >
            {movieObjs.map((m) => (
              <MovieCard
                key={m.kinopoiskId}
                posterUrl={m.posterUrl}
                title={m.nameRu}
                genres={m.genres}
                // year={m.year}
                id={m.kinopoiskId}
              />
            ))}
          </div>
        </div>
      ) : (
        'unauthorized'
      )}
    </div>
  );
};

export default Profile;
