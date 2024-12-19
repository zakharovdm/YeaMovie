import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export type Option = {
  name: string,
  slug: string
}

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

export const {useGetFilterQuery} = filterApi;
