import { useGetMoviesQuery } from "@/entities/movie/api/moviesApi";
import { Pagination } from "@/features/pagination";
import { START_PAGE_NUMBER } from "@/shared/constants";
import MovieList from "@/widgets/recommendations/ui/MovieList/MovieList";
import { useParams, useSearchParams } from "react-router-dom";
import styles from './styles.module.css';
import NavButton from "@/shared/ui/NavButton/NavButton";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";
import Loader from "@/shared/ui/Loader/Loader";
import { useParamsByCategory } from "@/shared/hooks/useParamsByCategory";

const ViewAllPage = () => {
  const { category = 'movies' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || START_PAGE_NUMBER);

  const params = useParamsByCategory(category);

  const { data, error, isLoading } = useGetMoviesQuery({
    page,
    limit: 18,
    ...params
  });

  const totalPages = data?.pages || 1;

  const handlePrevPage = () => setSearchParams({ page: String(page > 1 ? page - 1 : totalPages) });
  const handleNextPage = () => setSearchParams({ page: String(page >= totalPages ? 1 : page + 1) });
  const handlePageClick = (page: number) => setSearchParams({ page: String(page) });

  return (
    <main className={`${styles.wrapper} content-wrapper`}>
      <div>
        <NavButton title={'Назад'} />
      </div>
      {isLoading ? <Loader />
      : error ? (<ErrorMessage error={error} />) 
      : data?.docs ? <MovieList movies={data?.docs} /> : <div>Нет доступных фильмов</div>}
      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        currentPage={page}
      />
    </main>
  )
}

export default ViewAllPage;