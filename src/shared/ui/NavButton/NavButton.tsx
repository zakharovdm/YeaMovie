import { useNavigate } from "react-router-dom";
import arrowIcon from '@/shared/assets/icons/arrow-icon.svg';
import styles from './styles.module.css';

type Props = {
  title: string;
}

const NavButton = ({title}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === 'Назад') { 
      navigate(-1);
      console.log('или назад')
    } else {
      navigate('/');
      console.log('возврат на главную')
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <img src={arrowIcon} alt="Иконка стрелка назад" />
      {title}
    </button>
  )
}

export default NavButton;