import axios from "axios";



export const getMovieByTitle = async (title) => {
    const options = {
        method: 'GET',
        url: 'https://api.kinopoisk.dev/v1.4/movie/search',
        params: {
            page: '1',
            limit: '5',
            query: title
        },
        headers: {accept: 'application/json', 'X-API-KEY': 'FJ5H9ZT-6QS46CA-Q50YFJ6-7TGNHQR'}
    };

    try {
        const response = await axios.request(options);
       return response.data;
    } catch (err) {
        console.error(err.message.docs);
    }
}

getMovieByTitle('spider-man');