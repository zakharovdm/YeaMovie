import { useParams } from "react-router-dom";
import { MovieDetails } from "@/entities/movie";
import NavButton from "@/shared/ui/NavButton/NavButton";
import { SimilarMovies } from "@/widgets/similarMovies";
import { MovieStills } from "@/widgets/movieStills";
import { useGetMovieByIdQuery } from "@/entities/movie/api/moviesApi";
import styles from './styles.module.css';


const MovieDetailsPage = () => {
  const { id } = useParams();
  const movieId = id ? parseInt(id) : null;
  const { data } = useGetMovieByIdQuery({ id: movieId });

  return (
    <main className="content-wrapper">
      <div className={styles.inner}>
        <nav className={styles.navigation}>
          <NavButton title={'Главная'} />
          <NavButton title={'Назад'} />
        </nav>
        {data ? (
          <>
            <MovieDetails data={data} />
            <MovieStills movieId={data.id.toString()} />
            <SimilarMovies data={data?.similarMovies || []} />
          </>) : <p>Данные о фильме отсутствуют</p>}
      </div>
    </main>
  );
};

export default MovieDetailsPage;
