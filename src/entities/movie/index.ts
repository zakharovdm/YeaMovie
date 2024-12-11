import { moviesApi } from './api/moviesApi';
import { Movie, MoviesApiResponse } from './model/types';
import MovieCard from './ui/MovieCard/MovieCard';
import SearchMovieCard from './ui/SearchMovieCard/SearchMovieCard';
import MovieDetails from './ui/MovieDetails/MovieDetails';

export { moviesApi, MovieCard, SearchMovieCard, MovieDetails };
export type { Movie, MoviesApiResponse };
