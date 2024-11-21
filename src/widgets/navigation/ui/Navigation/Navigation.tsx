import styles from './styles.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="#">
            Главная
          </a>
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
