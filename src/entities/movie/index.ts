import { moviesApi } from './api/moviesApi';
import { Movie, MoviesApiResponse } from './model/types';
import MovieCard from './ui/MovieCard/MovieCard';
import SearchMovieCard from './ui/SearchMovieCard/SearchMovieCard';

export { moviesApi, MovieCard, SearchMovieCard };
export type { Movie, MoviesApiResponse };
