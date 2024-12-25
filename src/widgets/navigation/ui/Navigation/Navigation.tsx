import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.link}>
            Главная
          </Link>
        </li>
        <li>
          <a className={styles.link} href="#">
            Популярные фильмы
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Популярные сериалы
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
