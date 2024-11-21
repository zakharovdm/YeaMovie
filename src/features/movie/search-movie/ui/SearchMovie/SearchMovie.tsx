import styles from './styles.module.css';
import searchIcon from '@/shared/assets/icons/search-icon.svg';

const SearchMovie = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Поиск..."
        type="text"
        id="search"
      />
      <img className={styles.icon} src={searchIcon} alt="Иконка поиска" />
    </div>
  );
};

export default SearchMovie;
