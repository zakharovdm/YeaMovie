import { useGetMovieByTitleQuery } from '@/entities/movie/api/moviesApi';
import {
  MOVIES_LIMIT_SEARCH_PAGE,
} from '@/shared/constants';
import { Movie, SearchMovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { useAppSelector } from '@/app/appStore';
import { Link } from 'react-router-dom';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';
import Loader from '@/shared/ui/Loader/Loader';
import { MoviesPagination } from '@/features/movies-pagination';
import { usePagination } from '@/shared/hooks/usePagination';
import { useEffect } from 'react';

const MovieSearchList = () => {
  const query = useAppSelector((state) => state.foundedMovies.query);
  const { page, handlePrevPage, handleNextPage, handlePageClick, syncTotalPages } = usePagination();

  const { data, isLoading, error } = useGetMovieByTitleQuery({
    page,
    limit: MOVIES_LIMIT_SEARCH_PAGE,
    query: query,
  });

  const totalPages = data?.pages || 1;

  useEffect(() => {
    if (totalPages) {
      syncTotalPages(totalPages);
    }
  }, [totalPages]);

  return (
    <section>
      <MoviesPagination
        totalPages={totalPages}
        currentPage={page}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onPageClick={handlePageClick}
      >
        <ul className={styles.list}>
          {isLoading ? <Loader />
            : error ? (<ErrorMessage error={error} />)
              : data?.docs.map((movie: Movie) => (
                <Link to={`/details/${movie.id}`} key={movie.id}>
                  <SearchMovieCard item={movie} />
                </Link>
              ))}
        </ul>
      </MoviesPagination>
    </section>
  );
};

export default MovieSearchList;
