import { useEffect, useState } from 'react';
import axios from 'axios';
import Store from '../../store/store.js';
import MovieCard from '../../components/Movie-card/MovieCard.jsx';
import { getMovieById } from '../../api/getMovieById.js';
import { Typography } from '@mui/material';
import LogoutButton from '../../components/Logout-button/LogoutButton.jsx';
import styles from './Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState();
  const [movies, setMovies] = useState([]);
  const store = new Store();
  const authHeader = 'Bearer ' + localStorage.getItem('token');
  const movieObj = [];

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/api/users/me', {
        headers: { authorization: authHeader },
        withCredentials: true,
      });
      if (response.status !== 401) {
        const user = response.data;
        setUser(user);
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
      // const fff = await getMovieById(movies[1]);
      for (let i = 0; i < movies.length; i++) {
        movieObj[i] = await getMovieById(movies[i]);
      }
      console.log(movies);
      console.log(movieObj);
    }
    fetchMoviesData();
  }, []);

  // useEffect(() => {
  //   async function mapMovies() {
  //     for (let i = 0; i < movies.length; i++) {
  //       movieObj[i] = await getMovieById(movies[i]);
  //     }
  //   }
  //   mapMovies();
  //   console.log(movieObj);
  // }, []);

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
          <div>
            {movieObj.map((m) => (
              <MovieCard
                key={m.kinopoiskId}
                posterUrl={m.posterUrl}
                title={m.nameRu}
                genres={m.genres}
                year={m.year}
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
