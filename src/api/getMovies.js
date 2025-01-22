import axios from "axios";


const KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export const getMovies = async (page) => {
    const options = {
        headers: {accept: 'application/json', 'X-API-KEY': KEY}
    };
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=10`, options);
    return response.data;
}