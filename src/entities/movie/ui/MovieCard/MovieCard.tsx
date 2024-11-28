import Image from '@/shared/ui/Image/Image';
import { Movie } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  item: Movie;
}

const MovieCard = ({ item }: Props) => {
  const rating = Math.round(item.rating.kp);

  return (
    <li className={styles.card}>
      <Image
        className={styles.poster}
        image={item.poster.url}
        alt="Постер фильма"
      />
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.year}>{item.year} г.</p>
        </div>
        <p className={styles.rating}>{rating}/10</p>
      </div>
    </li>
  );
};

export default MovieCard;
