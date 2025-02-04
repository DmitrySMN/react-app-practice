import axios from "axios";

const KEY = import.meta.env.VITE_KINOPOISK_API_KEY;
// const URL = import.meta.env.VITE_KINOPOISK_PREMIER_MOVIES;

export const getPremiereMovies = async () => {
  const options = {
    headers: {
      accept: "application/json",
      "X-API-KEY": KEY,
    },
  };
  const response = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2025&month=FEBRUARY`,
    options,
  );
  return response.data.items;
};
