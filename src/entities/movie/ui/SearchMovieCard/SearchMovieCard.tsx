import Image from '@/shared/ui/Image/Image';
import { Movie } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  item: Movie;
}

const SearchMovieCard = ({ item }: Props) => {
  const ratingKp = Math.round(item.rating.kp);
  const ratingIMDb = Math.round(item.rating.imdb);

  return (
    <li className={styles.card}>
      <Image
        className={styles.poster}
        image={item.poster?.url}
        alt="Постер фильма"
      />
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{item.name}</h3>
          <div className={styles.rating}>
            <p>
              Кинопоиск <span>{ratingKp}/10</span>
            </p>
            <p>
              IMDb <span>{ratingIMDb}/10</span>
            </p>
          </div>
        </div>
        <p className={styles.description}>{item.shortDescription}</p>
        <ul className={styles.aboutMovie}>
          <li>
            <p>Жанр:</p>
            <p>{item.genres.map((genre) => genre.name).join(', ')}</p>
          </li>
          <li>
            <p>Страна:</p>
            <p>{item.countries.map((country) => country.name).join(', ')}</p>
          </li>
          <li>
            <p>Год:</p>
            <p>{item.year}</p>
          </li>
        </ul>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.buttonWatch}`} type="button">
            Смотреть
          </button>
          <button className={`${styles.button} ${styles.buttonFavorite}`} type="button">
            В избранное
          </button>
        </div>
      </div>
    </li>
  );
};

export default SearchMovieCard;
