import { useGetMovieByTitleQuery } from '@/entities/movie/api/moviesApi';
import {
  MOVIES_LIMIT_SEARCH_PAGE,
  START_PAGE_NUMBER,
} from '@/shared/constants';
import { Movie, SearchMovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { useAppSelector } from '@/app/appStore';
import { Link } from 'react-router-dom';

const MovieSearchList = () => {
  const query = useAppSelector((state) => state.foundedMovies.query);

  const { data } = useGetMovieByTitleQuery({
    page: START_PAGE_NUMBER,
    limit: MOVIES_LIMIT_SEARCH_PAGE,
    query: query,
  });

  return (
    <ul className={styles.list}>
      {data?.docs.map((movie: Movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <SearchMovieCard item={movie} />
        </Link>
      ))}
    </ul>
  );
};

export default MovieSearchList;
