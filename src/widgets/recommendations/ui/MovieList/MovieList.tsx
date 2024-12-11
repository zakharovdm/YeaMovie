import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { MOVIES_LIMIT_PREVIEW_POPULAR_PAGE, START_PAGE_NUMBER } from '@/shared/constants';
import { Movie, MovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

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
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <MovieCard item={movie} />
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
