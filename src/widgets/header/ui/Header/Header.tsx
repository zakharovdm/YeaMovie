import { SearchMovie } from '@/features/search-movie';
import Logo from '@/shared/ui/Logo/Logo';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} wrapper`}>
      <a className={styles.logoLink} href="#">
        <Logo />
      </a>
      <SearchMovie />
    </header>
  );
};

export default Header;
