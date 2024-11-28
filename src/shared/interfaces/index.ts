export interface Filters {
  page: number | null;
  limit: number | null;
  lists: string | null;
  sortField: string | null;
  sortType: string | null;
}

export type ParamsType = Partial<Filters>;
