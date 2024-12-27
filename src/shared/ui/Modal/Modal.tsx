import { ReactNode } from "react";
import ReactDOM from "react-dom";
import closeIcon from '@/shared/assets/icons/close-icon.svg';
import styles from './styles.module.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={styles.modalBackground}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
        >
          <img src={closeIcon} alt='Иконка закрытия окна' />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
