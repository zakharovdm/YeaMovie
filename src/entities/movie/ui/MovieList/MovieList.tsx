import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./styles.module.css";
import { Movie } from "../../model/types";

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
  )
}

export default MovieList;
