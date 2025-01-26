import axios from "axios";

const KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export const getMovieByKeyWords = async (keyWordString) => {
  const options = {
    headers: {
      accept: "application/json",
      "X-API-KEY": KEY,
    },
  };

  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyWordString}&page=1`,
      options,
    );
    return response.data.films;
  } catch (err) {
    console.error(err.message);
  }
};
