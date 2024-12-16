import { useGetMovieByTitleQuery } from '@/entities/movie/api/moviesApi';
import {
  MOVIES_LIMIT_SEARCH_PAGE,
  START_PAGE_NUMBER,
} from '@/shared/constants';
import { Movie, SearchMovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { useAppSelector } from '@/app/appStore';
import { Link, useSearchParams } from 'react-router-dom';
import { Pagination } from '@/features/pagination';

const MovieSearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || START_PAGE_NUMBER);
  const query = useAppSelector((state) => state.foundedMovies.query);

  const { data } = useGetMovieByTitleQuery({
    page,
    limit: MOVIES_LIMIT_SEARCH_PAGE,
    query: query,
  });

  const totalPages = data?.pages || 1;

  const handlePrevPage = () => setSearchParams({ page: String(page > 1 ? page - 1 : totalPages) });
  const handleNextPage = () => setSearchParams({ page: String(page >= totalPages ? 1 : page + 1) });
  const handlePageClick = (page: number) => setSearchParams({ page: String(page) });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {data?.docs.map((movie: Movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <SearchMovieCard item={movie} />
          </Link>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        currentPage={page}
        />
    </div>
  );
};

export default MovieSearchList;
