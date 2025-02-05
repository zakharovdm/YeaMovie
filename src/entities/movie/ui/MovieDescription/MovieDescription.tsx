import { Movie } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  item: Movie;
}

const MovieDescription = ({ item }: Props) => {
  return (
    <div className={styles.descriptionBlock}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>{item?.name}</h2>
        <button
          className={`${styles.button} ${styles.buttonFavorite}`}
          type="button"
        >
          В избранное
        </button>
      </div>
      <p className={styles.description}>{item?.description}</p>
    </div>
  );
};

export default MovieDescription;
