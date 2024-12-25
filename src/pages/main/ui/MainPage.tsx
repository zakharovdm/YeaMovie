import { MovieFilterList } from "@/widgets/movieFilter";
import { Recommendations } from "@/widgets/recommendations";
import styles from "./styles.module.css";
import { Slider } from "@/features/slider";

const MainPage = () => {

  return (
    <main className={`${styles.main} content-wrapper`}>
      <Slider />
      <Recommendations />
      <MovieFilterList />
    </main>
  );
};

export default MainPage;
