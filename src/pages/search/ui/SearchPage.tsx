import { MovieSearchList } from '@/widgets/searchMovieResult';
import arrowIcon from '@/shared/assets/icons/arrow-icon.svg';
import styles from './styles.module.css';

const SearchPage = () => {
  return (
    <main className="content-wrapper">
      <div className={styles.inner}>
        <div className={styles.innerButton}>
          <button className={styles.buttonBack}>
            <img src={arrowIcon} alt="Иконка стрелка назад" />
            Назад
          </button>
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
