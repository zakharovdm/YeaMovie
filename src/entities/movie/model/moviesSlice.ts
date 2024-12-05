import { Movie } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  foundedMovies: Movie[] | null;
  query: string;
}

const initialState: State = {
  foundedMovies: [],
  query: '',
};

export const foundedMoviesSlice = createSlice({
  name: 'foundedMovies',
  initialState,
  reducers: {
    setFoundedMovies: (state, action: PayloadAction<Movie[] | null>) => {
      state.foundedMovies = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setFoundedMovies, setQuery } = foundedMoviesSlice.actions;
export default foundedMoviesSlice.reducer;