import MovieList from '../MovieList/MovieList';
import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { MOVIES_LIMIT_PREVIEW_POPULAR_PAGE, START_PAGE_NUMBER } from '@/shared/constants';
import { useState } from 'react';
import styles from './styles.module.css';

const Recommendations = () => {
  const [activeCategory, setActiveCategory] = useState('movies');

  const { data } = useGetMoviesQuery({
    page: START_PAGE_NUMBER,
    limit: MOVIES_LIMIT_PREVIEW_POPULAR_PAGE,
    lists: activeCategory === 'movies' ? "top250" : "series-top250",
    sortField: "year",
    sortType: "-1",
  });

  return (
    <>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${activeCategory === 'movies' ? styles.active : ''}`}
          type="button"
          onClick={() => setActiveCategory('movies')}>
          Популярные фильмы
        </button>
        <button className={`${styles.button} ${activeCategory === 'series' ? styles.active : ''}`}
          type="button"
          onClick={() => setActiveCategory('series')}>
          Популярные сериалы
        </button>
      </div>
      {data?.docs ? <MovieList movies={data?.docs} /> : <div>Нет доступных фильмов</div>}
    </>


  );
};

export default Recommendations;
