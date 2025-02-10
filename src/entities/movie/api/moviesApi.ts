import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ImageMovieApiResponse, MoviesApiResponse } from '../model/types';
import { ParamsType } from '@/shared/interfaces';

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export type Option = {
  name: string,
  slug: string
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApiResponse, ParamsType>({
      query: (params) => {
        const {
          page,
          limit,
          lists,
          sortField,
          sortType,
          year,
          'genres.name': genresName,
          'countries.name': country,
          'rating.kp': rating,
          notNullFields,
          'releaseYears.start': startYear
        } = params || {};
        return {
          url: 'v1.4/movie',
          params: {
            page,
            limit,
            lists,
            sortField,
            sortType,
            year,
            'genres.name': genresName,
            'countries.name': country,
            'rating.kp': rating,
            'releaseYears.start': startYear,
            notNullFields,
          },
        };
      },
    }),
    getMovieByTitle: builder.query<MoviesApiResponse, ParamsType>({
      query: (params) => {
        const { page, limit, query } = params || {};
        return {
          url: 'v1.4/movie/search',
          params: {
            page,
            limit,
            query,
          },
        };
      },
    }),
    getMovieById: builder.query<MoviesApiResponse, ParamsType>({
      query: (params) => {
        const { id } = params || {};
        return {
          url: `v1.4/movie/${id}`,
          params: {
            id,
          },
        };
      },
    }),
    getImagesFromMovie: builder.query<ImageMovieApiResponse, ParamsType>({
      query: (params) => {
        const { page, limit, movieId, type } = params || {};
        return {
          url: 'v1.4/image',
          params: {
            page,
            limit,
            movieId,
            type
          }
        }
      }
    })
  }),
});

export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilter: builder.query<Option[], {field: string}>({
      query: (params) => {
        const {
          field
        } = params || {};
        return {
          url: 'v1/movie/possible-values-by-field',
          params: {
            field
          },
        };
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByTitleQuery,
  useGetMovieByIdQuery,
  useGetImagesFromMovieQuery
} = moviesApi;

export const {useGetFilterQuery} = filterApi;
