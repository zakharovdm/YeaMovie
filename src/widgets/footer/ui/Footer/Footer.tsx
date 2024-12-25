import Logo from '@/shared/ui/Logo/Logo';
import styles from './styles.module.css';
import { Navigation } from '@/widgets/navigation';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${styles.footer} wrapper`}>
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <Navigation />
    </footer>
  );
};

export default Footer;
