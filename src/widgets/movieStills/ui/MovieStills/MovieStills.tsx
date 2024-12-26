import { useGetImagesFromMovieQuery } from '@/entities/movie/api/moviesApi';
import styles from './styles.module.css';
import { START_PAGE_NUMBER } from '@/shared/constants';
import ImageList from '../ImageList/ImageList';

type Props = {
  movieId: string
}

const MovieStills = ({ movieId }: Props) => {
  const { data } = useGetImagesFromMovieQuery({ page: START_PAGE_NUMBER, limit: 6, type: 'still', movieId });

  return <>
    <div className={styles.inner}>
      <h3 className={styles.title}>Кадры из фильма</h3>
    </div>
    {data ? <ImageList images={data.docs} /> : <div>Нет доступных кадров</div>}
  </>

};

export default MovieStills;