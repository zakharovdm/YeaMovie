import { useAppSelector } from '@/app/appStore';

export const useParamsByCategory = (category: string) => {
  const { year, genres, country, rating } = useAppSelector(
    (state) => state.foundedMovies.filters
  );

  switch (category) {
    case 'movies':
      return {
        lists: 'top250',
        sortField: 'year',
        sortType: '-1',
      };

    case 'series':
      return {
        lists: 'series-top250',
        sortField: 'year',
        sortType: '-1',
      };

    case 'filtered':
      return {
        year,
        'genres.name': genres,
        'countries.name': country,
        'rating.kp': rating,
      };

    default:
      return {};
  }
};
