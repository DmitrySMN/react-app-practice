import axios from 'axios';

const KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export const getMovieById = async (movieId) => {
  const options = {
    headers: {
      accept: 'application/json',
      'X-API-KEY': KEY,
    },
  };

  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`,
      options,
    );
    console.log(response.status);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
