import { useGetMoviesQuery } from "@/entities/movie/api/moviesApi";
import { Pagination } from "@/features/pagination";
import { START_PAGE_NUMBER } from "@/shared/constants";
import MovieList from "@/widgets/recommendations/ui/MovieList/MovieList";
import { useParams, useSearchParams } from "react-router-dom";
import styles from './styles.module.css';
import { useAppSelector } from "@/app/appStore";
import NavButton from "@/shared/ui/NavButton/NavButton";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage";

const ViewAllPage = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { year, genres, country, rating } = useAppSelector((state) => state.foundedMovies.filters);
  const page = Number(searchParams.get('page') || START_PAGE_NUMBER);
  let moviesParams = {};
  let seriesParams = {}

  let filterParams = {}

  switch (category) {
    case 'movies':
      moviesParams = {
        lists: "top250",
        sortField: "year",
        sortType: "-1",
      };
      break
    case 'series':
      seriesParams = {
        lists: "series-top250",
        sortField: "year",
        sortType: "-1",
      };
      break
    case 'filtered':
      filterParams = {
        year,
        'genres.name': genres,
        'countries.name': country,
        'rating.kp': rating,
      };
      break
    default:
      break
  }

  const { data, error, isLoading } = useGetMoviesQuery({
    page,
    limit: 18,
    ...moviesParams,
    ...seriesParams,
    ...filterParams,
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
      {isLoading ? (<p>Загрузка...</p>) 
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