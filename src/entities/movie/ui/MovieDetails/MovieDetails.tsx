import Image from '@/shared/ui/Image/Image';
import styles from './styles.module.css';
import { Movie } from '../../model/types';
import StreamingList from '@/shared/ui/StreamingList/StreamingList';
import MovieDescription from '../MovieDescription/MovieDescription';
import AboutMovie from '../AboutMovie/AboutMovie';

type Props = {
  data: Movie;
}

const MovieDetails = ({ data }: Props) => {
  const ratingKp = Math.round(data?.rating.kp ?? 0);
  const ratingIMDb = Math.round(data?.rating.imdb ?? 0);
  const streaming = data?.watchability?.items;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.leftBlock}>
          <Image
            className={styles.poster}
            image={data?.poster?.url}
            alt="Постер фильма"
          />
          <StreamingList streaming={streaming} />
        </div>
        <div className={styles.info}>
          <div className={styles.inner}>
            <MovieDescription item={data} />
            <div className={styles.rating}>
              <p>
                Кинопоиск <span>{ratingKp}/10</span>
              </p>
              <p>
                IMDb <span>{ratingIMDb}/10</span>
              </p>
            </div>
          </div>
          <AboutMovie item={data} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
