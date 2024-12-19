import { Movie } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  foundedMovies: Movie[] | null;
  query: string;
  filters: {
    genres: string;
    country: string;
    year: string;
    rating: string;
  };
}

const initialState: State = {
  foundedMovies: [],
  query: '',
  filters: {
    genres: 'драма',
    country: 'США',
    year: '2024',
    rating: '7-10', 
  },
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
    setFilter: (state, action: PayloadAction<Partial<typeof initialState.filters>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload
      }
    }
  },
});

export const { setFoundedMovies, setQuery, setFilter } = foundedMoviesSlice.actions;
export default foundedMoviesSlice.reducer;