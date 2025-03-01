import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import searchIcon from '@/shared/assets/icons/search-icon.svg';
import { setQuery } from '@/entities/movie/model/moviesSlice';
import { useAppDispatch } from '@/app/appStore';
import { useRef } from 'react';

const SearchMovie = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/search-result');
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get('search');
    dispatch(setQuery(query as string));
    if (inputRef.current) {
      inputRef.current.value = '';    
    }
  };

  return (
    <form className={styles.search} onSubmit={submitHandler}>
      <input
        className={styles.input}
        placeholder="Поиск..."
        type="text"
        id="search"
        name='search'
        ref={inputRef}
      />
      <button className={styles.button} type="submit">
        <img className={styles.icon} src={searchIcon} alt="Иконка поиска" />
      </button>
    </form>
  );
};

export default SearchMovie;
