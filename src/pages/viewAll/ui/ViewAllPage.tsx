import { useGetMoviesQuery } from "@/entities/movie/api/moviesApi";
import MovieList from "@/widgets/recommendations/ui/MovieList/MovieList";
import { useParams } from "react-router-dom";
import styles from './styles.module.css';
import NavButton from "@/shared/ui/NavButton/NavButton";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";
import Loader from "@/shared/ui/Loader/Loader";
import { useParamsByCategory } from "@/shared/hooks/useParamsByCategory";
import { MoviesPagination } from "@/features/movies-pagination";
import { usePagination } from "@/shared/hooks/usePagination";
import { useEffect } from "react";

const ViewAllPage = () => {
  const { category = 'movies' } = useParams()
  const params = useParamsByCategory(category);
  const { page, handlePrevPage, handleNextPage, handlePageClick, syncTotalPages } = usePagination();

  const { data, error, isLoading } = useGetMoviesQuery({
    page,
    limit: 18,
    ...params
  });

  const totalPages = data?.pages || 1;

  useEffect(() => {
    syncTotalPages(totalPages);
  }, [totalPages]);

  return (
    <main className={`${styles.wrapper} content-wrapper`}>
      <MoviesPagination
        totalPages={totalPages}
        currentPage={page}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onPageClick={handlePageClick}
      >
        <div>
          <NavButton title={'Назад'} />
        </div>
        {isLoading ? <Loader />
          : error ? (<ErrorMessage error={error} />)
            : data?.docs ? <MovieList movies={data?.docs} /> : <div>Нет доступных фильмов</div>}
      </MoviesPagination>
    </main>
  )
}

export default ViewAllPage;