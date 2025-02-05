import { Movie } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  item: Movie;
}

const AboutMovie = ({ item }: Props) => {
  return (
    <div className={styles.aboutMovie}>
      <h3 className={styles.aboutMovieTitle}>О фильме</h3>
      <ul className={styles.aboutMovieList}>
        <li>
          <p>Жанр:</p>
          <p>{item.genres.map((genre) => genre.name).join(', ')}</p>
        </li>
        <li>
          <p>Страна:</p>
          <p>
            {item.countries.map((country) => country.name).join(', ')}
          </p>
        </li>
        <li>
          <p>Год:</p>
          <p>{item.year}</p>
        </li>
        <li>
          <p>Режиссер:</p>
          <p>
            {item.persons
              .filter((person) => person.enProfession === 'director')
              .map((person) => person.name)
              .join(', ')}
          </p>
        </li>
        <li>
          <p>Актеры:</p>
          <p>
            {item.persons
              .filter((person) => person.enProfession === 'actor')
              .map((person) => person.name)
              .join(', ')}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutMovie;
