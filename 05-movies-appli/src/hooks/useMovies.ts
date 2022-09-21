import axios from 'axios';
import {useEffect, useState} from 'react';
import {Movie, MovieDB} from '../interfaces/movieInterfaces';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '977dc91d3ca00156a8216522c3779855',
  },
});

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  const getMovies = async () => {
    const nowPlayingPromise = await movieDB.get<MovieDB>('/now_playing');

    setNowPlaying(nowPlayingPromise.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    nowPlaying,
    isLoading,
  };
};
