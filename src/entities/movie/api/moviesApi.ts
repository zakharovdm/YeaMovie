import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesApiResponse } from '../model/types';
import { ParamsType } from '@/shared/interfaces';

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

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
        const { page, limit, lists, sortField, sortType } = params || {};
        return {
          url: 'movie',
          params: {
            page,
            limit,
            lists,
            sortField,
            sortType,
          },
        };
      },
    }),
    getMovieByTitle: builder.query<MoviesApiResponse, ParamsType>({
      query: (params) => {
        const { page, limit, query } = params || {};
        return {
          url: 'movie/search',
          params: {
            page,
            limit,
            query
          }
        }
      }
    }),
    getMovieById: builder.query<MoviesApiResponse, ParamsType>({
      query: (params) => {
        const { id } = params || {};
        return {
          url: `movie/${id}`,
          params: {
            id,
          }
        }
      }
    })
  }),
});

export const { useGetMoviesQuery, useGetMovieByTitleQuery, useGetMovieByIdQuery } = moviesApi;
