import { MovieSearchList } from '@/widgets/searchMovieResult';
import styles from './styles.module.css';
import NavButton from '@/shared/ui/NavButton/NavButton';

const SearchPage = () => {
  return (
    <main className="content-wrapper">
      <div className={styles.inner}>
        <div className={styles.innerButton}>
          <NavButton title={'Назад'} />
        </div>
        <div className={styles.innerTitle}>
          <h1 className={styles.title}>Результаты поиска</h1>
        </div>
      </div>
      <MovieSearchList />
    </main>
  );
};

export default SearchPage;
