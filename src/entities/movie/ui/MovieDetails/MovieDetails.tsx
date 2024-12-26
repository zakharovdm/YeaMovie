import Image from '@/shared/ui/Image/Image';
import styles from './styles.module.css';
import { Movie } from '../../model/types';

type Props = {
  data: Movie;
}

const MovieDetails = ({data}: Props) => {
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
          <div>
            <p className={styles.streamingTitle}>Смотреть на:</p>
            <ul className={styles.streamingList}>
              {streaming && streaming.length > 0 ? (
                streaming?.map((item) => {
                  return (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={styles.logo}
                          src={item.logo.url}
                          alt={item.name}
                        />
                      </a>
                    </li>
                  );
                })
              ) : (
                <p className={styles.noInfo}>
                  Нет информации о видеостримингах
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.inner}>
            <div className={styles.headerBlock}>
              <div className={styles.titleBlock}>
                <h2 className={styles.title}>{data?.name}</h2>
                <button
                  className={`${styles.button} ${styles.buttonFavorite}`}
                  type="button"
                >
                  В избранное
                </button>
              </div>
              <p className={styles.description}>{data?.description}</p>
            </div>
            <div className={styles.rating}>
              <p>
                Кинопоиск <span>{ratingKp}/10</span>
              </p>
              <p>
                IMDb <span>{ratingIMDb}/10</span>
              </p>
            </div>
          </div>
          <div className={styles.aboutMovie}>
            <h3 className={styles.aboutMovieTitle}>О фильме</h3>
            <ul className={styles.aboutMovieList}>
              <li>
                <p>Жанр:</p>
                <p>{data?.genres.map((genre) => genre.name).join(', ')}</p>
              </li>
              <li>
                <p>Страна:</p>
                <p>
                  {data?.countries.map((country) => country.name).join(', ')}
                </p>
              </li>
              <li>
                <p>Год:</p>
                <p>{data?.year}</p>
              </li>
              <li>
                <p>Режиссер:</p>
                <p>
                  {data?.persons
                    .filter((person) => person.enProfession === 'director')
                    .map((person) => person.name)
                    .join(', ')}
                </p>
              </li>
              <li>
                <p>Актеры:</p>
                <p>
                  {data?.persons
                    .filter((person) => person.enProfession === 'actor')
                    .map((person) => person.name)
                    .join(', ')}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
