import { combineReducers } from '@reduxjs/toolkit';
import foundedMoviesReducer  from '@/entities/movie/model/moviesSlice';
import { moviesApi, filterApi } from '@/entities/movie';

export const rootReducer = combineReducers({
  foundedMovies: foundedMoviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [filterApi.reducerPath]: filterApi.reducer
});
