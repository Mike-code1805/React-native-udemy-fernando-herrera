import axios from 'axios';
import {RN_TMDB_KEY} from '@env';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: RN_TMDB_KEY,
    language: 'es-ES',
  },
});

export default movieDB;
