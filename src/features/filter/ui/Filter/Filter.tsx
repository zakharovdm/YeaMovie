import { foundedMoviesSlice } from '@/entities/movie/model/moviesSlice';
import { Option, useGetFilterQuery } from '../../api/filterApi';
import { useAppDispatch } from '@/app/appStore';
import styles from './styles.module.css';


const Filter = () => {
  const dispatch = useAppDispatch();
  const { data: genresData } = useGetFilterQuery({ field: 'genres.name' })
  const { data: countriesData } = useGetFilterQuery({ field: 'countries.name' })
  const years = Array.from({ length: 2024 - 1895 + 1 }, (_, i) => 2024 - i);
  const numbers = Array.from({ length: 10 }, (_, i) => (10 - i).toString());

  const onFilterChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    dispatch(foundedMoviesSlice.actions.setFilter({ [name]: value }));
  }

  return (
    <form className={styles.form} onChange={onFilterChange}>
      <div className={styles.selectWrapper}>
        <select className={styles.select} name="genres" id="genres">
          <option value="Драма">Драма</option>
          {genresData?.map((genre: Option) => (
            <option key={genre.slug} value={genre.name}>{(genre.name).charAt(0).toUpperCase() + genre.name.slice(1)}</option>
          ))}
        </select>
      </div>
      <div className={styles.selectWrapper}>
        <select className={styles.select} name="country" id="country">
          <option value="США">США</option>
          {countriesData?.map((country: Option) => (
            <option key={country.slug} value={country.name}>{country.name}</option>
          ))}
        </select>
      </div>
      <div className={styles.selectWrapper}>
        <select className={styles.select} name="year" id="year">
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className={styles.selectWrapper}>
        <select className={styles.select} name="rating" id="rating">
          <option value="">от 7</option>
          {numbers.map((num) => (
            <option key={num} value={`${num}-10`}>от {num}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Filter;
