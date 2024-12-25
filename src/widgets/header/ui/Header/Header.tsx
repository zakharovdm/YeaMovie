import { SearchMovie } from '@/features/search-movie';
import Logo from '@/shared/ui/Logo/Logo';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`${styles.header} wrapper`}>
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <SearchMovie />
    </header>
  );
};

export default Header;
