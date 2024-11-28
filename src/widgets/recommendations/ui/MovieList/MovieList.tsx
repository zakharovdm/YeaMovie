import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { MOVIES_LIMIT_PREVIEW_POPULAR_PAGE, START_PAGE_NUMBER } from '@/shared/constants';
import { Movie, MovieCard } from '@/entities/movie';
import styles from './styles.module.css';

const MovieList = () => {
  const { data } = useGetMoviesQuery({
    page: START_PAGE_NUMBER,
    limit: MOVIES_LIMIT_PREVIEW_POPULAR_PAGE,
    lists: "top250",
    sortField: "year",
    sortType: "-1",
  });

  return (
    <ul className={styles.list}>
      {data?.docs.map((movie: Movie) => (
        <MovieCard item={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
