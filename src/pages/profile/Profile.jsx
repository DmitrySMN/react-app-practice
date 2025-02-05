import { useEffect, useState } from 'react';
import axios from 'axios';
import Store from '../../store/store.js';

const Profile = () => {
  const [user, setUser] = useState();
  const [movies, setMovies] = useState([]);

  const store = new Store();
  useEffect(() => {
    async function fetchData() {
      const authHeader = 'Bearer ' + localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/users/me', {
        headers: { authorization: authHeader },
        withCredentials: true,
      });
      if (response.status !== 401) {
        const user = response.data;
        setUser(user);
      }

      const moviesResponse = await axios.get(
        'http://localhost:3000/api/users/favorites',
        {
          headers: { authorization: authHeader },
        },
      );

      setMovies(moviesResponse.data.favorites);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>{user ? 'Вы авториованы как ' + user.username : 'unauthorized'}</h2>
      <h3>Ваши любимые фильмы</h3>
      {movies.map((m) => (
        <li>{m}</li>
      ))}
    </>
  );
};

export default Profile;
