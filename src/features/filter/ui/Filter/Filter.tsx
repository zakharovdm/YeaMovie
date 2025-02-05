import { foundedMoviesSlice } from '@/entities/movie/model/moviesSlice';
import { useGetFilterQuery } from '@/entities/movie/api/filterApi';
import { useAppDispatch } from '@/app/appStore';
import styles from './styles.module.css';
import Dropdown from '@/shared/ui/Dropdown/Dropdown';


const Filter = () => {
  const dispatch = useAppDispatch();
  const { data: genresData } = useGetFilterQuery({ field: 'genres.name' })
  const { data: countriesData } = useGetFilterQuery({ field: 'countries.name' })
  const years = Array.from({ length: 2024 - 1895 + 1 }, (_, i) => 2024 - i);
  const numbers = Array.from({ length: 10 }, (_, i) => (10 - i));

  const onFilterChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    dispatch(foundedMoviesSlice.actions.setFilter({ [name]: value }));
  }

  return (
    <form className={styles.form} onChange={onFilterChange}>
      <Dropdown name='genres' data={genresData} value='Драма'/>
      <Dropdown name='country' data={countriesData} value='США'/>
      <Dropdown name='year' data={years} value='2025' />
      <Dropdown name='rating' data={numbers} value='от 7' />
    </form>
  );
};

export default Filter;
