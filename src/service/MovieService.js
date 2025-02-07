import axios from 'axios';

const KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export class MovieService {
  options = {
    headers: {
      accept: 'application/json',
      'X-API-KEY': KEY,
    },
  };

  static async getMovieById(movieId) {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`,
        this.options,
      );
      console.log(response.status);
      return response.data;
    } catch (err) {
      console.error(err.message);
    }
  }

  static async getMovieByKeyWords(keyWordString) {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyWordString}&page=1`,
        this.options,
      );
      return response.data.films;
    } catch (err) {
      console.error(err.message);
    }
  }

  static async getPremiereMovies() {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2025&month=FEBRUARY`,
      this.options,
    );
    return response.data.items;
  }
}
