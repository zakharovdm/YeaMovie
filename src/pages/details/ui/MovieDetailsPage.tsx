import { MovieDetails } from "@/entities/movie";
import NavButton from "@/shared/ui/NavButton/NavButton";
import styles from './styles.module.css';

const MovieDetailsPage = () => {
  return (
    <main className="content-wrapper">
      <div className={styles.inner}>
        <nav className={styles.navigation}>
          <NavButton title={'Главная'} />
          <NavButton title={'Назад'} />
        </nav>
        <MovieDetails />
      </div>
    </main>
  );
};

export default MovieDetailsPage;
