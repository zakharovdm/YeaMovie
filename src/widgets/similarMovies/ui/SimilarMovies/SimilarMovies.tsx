import MovieList from '@/entities/movie/ui/MovieList/MovieList';
import { Movie } from '@/entities/movie';
import styles from './styles.module.css';

type Props = {
  data: Movie[] | [];
}

const SimilarMovies = ({ data }: Props) => {
return (
    <>
      <h3 className={styles.title}>Возможно, вам понравится</h3>
      {data.length > 0 ? <MovieList movies={data} /> : <div>Нет похожих фильмов</div>}
    </>
  );
};

export default SimilarMovies;
