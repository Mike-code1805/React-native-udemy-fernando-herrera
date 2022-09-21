import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '977dc91d3ca00156a8216522c3779855',
    language: 'es-ES',
  },
});

export default movieDB;
