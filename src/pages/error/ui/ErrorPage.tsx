import { useRouteError } from "react-router-dom";
import NavButton from "@/shared/ui/NavButton/NavButton";
import styles from "./styles.module.css";

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  const status = error?.status || 500;
  const statusText = error?.statusText || "Неизвестная ошибка";
  const message =
    error?.message || "Что-то пошло не так. Попробуйте перезагрузить страницу.";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Упс!</h1>
      <p className={styles.subtitle}>
        Мы столкнулись с проблемой. {status === 404 ? "Страница не найдена." : ""}
      </p>
      <div className={styles.errorDetails}>
        <p>
          <strong>Код ошибки:</strong> {status}
        </p>
        <p>
          <strong>Описание:</strong> {statusText}
        </p>
        <p>
          <strong>Сообщение:</strong> {status === 404 ? "Страница не найдена." : message}
        </p>
      </div>
      <div className={styles.actions}>
        <NavButton title={"Главная"} />
      </div>
    </div>
  );
};

export default ErrorPage;
