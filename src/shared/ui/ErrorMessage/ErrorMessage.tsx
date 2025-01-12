import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import styles from './styles.module.css';
import { SerializedError } from '@reduxjs/toolkit';

type Props = {
  error: FetchBaseQueryError | SerializedError | undefined | Error;
}

const ErrorMessage = ({error }: Props) => {
  let errorMessage = 'Произошла ошибка. Попробуйте позже.';

  if (error) {
    if ('status' in error) {
      switch (error.status) {
        case 404:
          errorMessage = 'Ресурс не найден.';
          break;
        case 500:
          errorMessage = 'Ошибка сервера. Попробуйте позже.';
          break;
        default:
          errorMessage = `Ошибка: ${error.status}`;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
  }

  return (
    <div className={styles.error}>
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorMessage;