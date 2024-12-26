export interface Filters {
  id: number | null;
  page: number | null;
  limit: number | null;
  lists: string | null;
  sortField: string | null;
  sortType: string | null;
  query: string | null;
  year: string | null;
  'genres.name': string | null;
  'countries.name': string | null;
  'rating.kp': string | null;
  'releaseYears.start': string | null;
  notNullFields: string | null;
  movieId: string | null;
  type: string | null;
}

export type ParamsType = Partial<Filters>;
