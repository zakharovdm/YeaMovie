import { Movie } from './types';
import { createSlice } from '@reduxjs/toolkit';

interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: []
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;