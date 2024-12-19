import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { MOVIES_LIMIT_PREVIEW_FILTER, START_PAGE_NUMBER } from '@/shared/constants';
import { Movie, MovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { Filter } from '@/features/filter';
import { useAppSelector } from '@/app/appStore';

const MovieFilterList = () => {
  const {year, genres, country, rating} = useAppSelector((state) => state.foundedMovies.filters);

  const { data } = useGetMoviesQuery({
    page: START_PAGE_NUMBER,
    limit: MOVIES_LIMIT_PREVIEW_FILTER,
    year,
    'genres.name': genres,
    'countries.name': country,
    'rating.kp': rating,
  });
  

  return (
    <section className={styles.filter}>
      <h3 className={styles.title}>Фильмы по категориям</h3>
      <Filter />
      <ul className={styles.list}>
        {data?.docs.map((movie: Movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <MovieCard item={movie} />
          </Link>
        ))}
      </ul>
    </section>

  );
};

export default MovieFilterList;
