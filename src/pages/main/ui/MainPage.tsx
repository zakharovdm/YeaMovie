import { MovieFilterList } from "@/widgets/movieFilter";
import { MovieList } from "@/widgets/recommendations";
import styles from "./styles.module.css";

const MainPage = () => {

  return (
    <main className={`${styles.main} content-wrapper`}>
      <MovieList />
      <MovieFilterList />
    </main>
  );
};

export default MainPage;
