import { combineReducers } from '@reduxjs/toolkit';
import foundedMoviesReducer  from '@/entities/movie/model/moviesSlice';
import { moviesApi } from '@/entities/movie';
import { filterApi } from '@/features/filter/api/filterApi';

export const rootReducer = combineReducers({
  foundedMovies: foundedMoviesReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  [filterApi.reducerPath]: filterApi.reducer
});
