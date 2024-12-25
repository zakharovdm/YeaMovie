import { Movie, MovieCard } from '@/entities/movie';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

type Props = {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie: Movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <MovieCard item={movie} />
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
