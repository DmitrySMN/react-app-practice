import { useEffect, useState } from 'react';
import axios from 'axios';
import Store from '../../store/store.js';
import MovieCard from '../../components/Movie-card/MovieCard.jsx';
import { getMovieById } from '../../api/getMovieById.js';

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
      console.log(movies);
    }
    fetchMoviesData();
  }, []);

    useEffect(() => {
      async function mapMovies() {
        for (let i = 0; i < movies.length; i++) {
          movieObj[i] = await getMovieById(movies[i]);
        }
      }
      mapMovies();
      console.log(movieObj);
    }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Вы авторизованы как {user.username}</h2>
          <h3>Ваши любимые фильмы</h3>
          <div>
            {movies.map((m) => (
                // <MovieCard
                //   key={m.kinopoiskId}
                //   posterUrl={m.posterUrl}
                //   title={m.nameRu}
                //   genres={m.genres}
                //   year={m.year}
                //   id={m.kinopoiskId}
                // />}
                <li>{m}</li>
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
