import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { MOVIES_LIMIT_PREVIEW_FILTER, START_PAGE_NUMBER } from '@/shared/constants';
import { Movie, MovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Filter } from '@/features/filter';
import { useAppSelector } from '@/app/appStore';
import ButtonViewAll from '@/shared/ui/ButtonViewAll/ButtonViewAll';
import { renderContent } from '@/shared/helpers/renderContent';

const MovieFilterList = () => {
  const { year, genres, country, rating } = useAppSelector((state) => state.foundedMovies.filters);
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetMoviesQuery({
    page: START_PAGE_NUMBER,
    limit: MOVIES_LIMIT_PREVIEW_FILTER,
    year,
    'genres.name': genres,
    'countries.name': country,
    'rating.kp': rating,
  });

  const content = (<>{data?.docs.map((movie: Movie) => (
    <Link to={`/details/${movie.id}`} key={movie.id}>
      <MovieCard item={movie} />
    </Link>
  ))}</>
  )

  return (
    <section className={styles.filter}>
      <h3 className={styles.title}>Фильмы по категориям</h3>
      <div className={styles.inner}>
        <Filter />
        <div className={styles.innerButton}>
          <ButtonViewAll onClick={() => navigate('/view-all/filtered')} />
        </div>
      </div>
      <ul className={styles.list}>
        {renderContent({
          isLoading,
          error,
          data,
          RenderComponent: content,
          EmptyComponent: <p>Нет фильмов по данному фильтру</p>
        })}
      </ul>
    </section>

  );
};

export default MovieFilterList;
