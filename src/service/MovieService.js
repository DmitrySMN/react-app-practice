import axios from 'axios';

const KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export class MovieService {
  static options = {
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

  static async getPremiereMovies(year = 2025, month = 'FEBRUARY') {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`,
      this.options,
    );
    return response.data.items;
  }

  static async getSimilarMoviesById(id) {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars
`,
      this.options,
    );
    return response.data.items;
  }
}
