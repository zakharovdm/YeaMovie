export interface Filters {
  id: number | null;
  page: number | null;
  limit: number | null;
  lists: string | null;
  sortField: string | null;
  sortType: string | null;
  query: string | null;
}

export type ParamsType = Partial<Filters>;
