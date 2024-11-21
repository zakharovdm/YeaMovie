import Logo from '@/shared/ui/Logo/Logo';
import styles from './styles.module.css';
import { Navigation } from '@/widgets/navigation';

const Footer = () => {
  return (
    <footer className={`${styles.footer} wrapper`}>
      <a className={styles.logoLink} href="#">
        <Logo />
      </a>
      <Navigation />
    </footer>
  );
};

export default Footer;
