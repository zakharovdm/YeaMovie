import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { MOVIES_LIMIT_PREVIEW_FILTER, START_PAGE_NUMBER } from '@/shared/constants';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { Filter } from '@/features/movies-filter';
import { useAppSelector } from '@/app/appStore';
import ButtonViewAll from '@/shared/ui/ButtonViewAll/ButtonViewAll';
import { renderContent } from '@/shared/helpers/renderContent';
import MovieList from '@/entities/movie/ui/MovieList/MovieList';

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

  return (
    <section className={styles.filter}>
      <h3 className={styles.title}>Фильмы по категориям</h3>
      <div className={styles.inner}>
        <Filter />
        <div className={styles.innerButton}>
          <ButtonViewAll onClick={() => navigate('/view-all/filtered')} />
        </div>
      </div>
      {renderContent({
        isLoading,
        error,
        data,
        RenderComponent: data ? <MovieList movies={data?.docs} /> : null,
        EmptyComponent: <p>Нет фильмов по данному фильтру</p>
      })}
    </section>

  );
};

export default MovieFilterList;
