import { MovieFilterList } from "@/widgets/movieFilter";
import { MovieList } from "@/widgets/recommendations";
import styles from "./styles.module.css";
import { Slider } from "@/features/slider";

const MainPage = () => {

  return (
    <main className={`${styles.main} content-wrapper`}>
      <Slider />
      <MovieList />
      <MovieFilterList />
    </main>
  );
};

export default MainPage;
