import arrowIcon from '@/shared/assets/icons/arrowViewAll-icon.svg';
import styles from './styles.module.css';

type Props = {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonViewAll = ({ onClick, className = '', disabled = false }: Props) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      Смотреть все
      <img src={arrowIcon} alt="Иконка стрелки" />
    </button>
  );
};

export default ButtonViewAll
