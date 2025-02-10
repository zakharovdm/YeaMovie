import { useGetMovieByTitleQuery } from '@/entities/movie/api/moviesApi';
import {
  MOVIES_LIMIT_SEARCH_PAGE,
} from '@/shared/constants';
import { Movie, SearchMovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { useAppSelector } from '@/app/appStore';
import { Link } from 'react-router-dom';
import { MoviesPagination } from '@/features/movies-pagination';
import { usePagination } from '@/shared/hooks/usePagination';
import { useEffect } from 'react';
import { renderContent } from '@/shared/helpers/renderContent';

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
    syncTotalPages(totalPages);
  }, [totalPages]);

  const content = (<>{
    data?.docs.map((movie: Movie) => (
      <Link to={`/details/${movie.id}`} key={movie.id}>
        <SearchMovieCard item={movie} />
      </Link>
    ))}
  </>)

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
          {renderContent({ 
            isLoading, 
            error, 
            data, 
            RenderComponent: content, 
            EmptyComponent: <p>Ничего не найдено</p> })}
        </ul>
      </MoviesPagination>
    </section>
  );
};

export default MovieSearchList;
