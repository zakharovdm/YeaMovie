import { useGetImagesFromMovieQuery } from '@/entities/movie/api/moviesApi';
import { useState } from 'react';
import { START_PAGE_NUMBER } from '@/shared/constants';
import ButtonViewAll from '@/shared/ui/ButtonViewAll/ButtonViewAll';
import styles from './styles.module.css';
import { renderContent } from '@/shared/helpers/renderContent';
import MovieStillsModal from '../MovieStillsModal/MovieStillsModal';

type Props = {
  movieId: string
}

const MovieStills = ({ movieId }: Props) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);
  const { data, isLoading, error } = useGetImagesFromMovieQuery({ page: START_PAGE_NUMBER, limit: 250, type: 'still', movieId });

  return <>
    <div className={styles.inner}>
      <h3 className={styles.title}>Кадры из фильма</h3>
    </div>
    <div className={styles.innerButton}>
      <ButtonViewAll onClick={openGallery} />
    </div>
    {
      renderContent({
        isLoading,
        error,
        data,
        RenderComponent: data ? (<MovieStillsModal data={data} isGalleryOpen={isGalleryOpen} closeGallery={closeGallery} />) : null,
        EmptyComponent: <div>Нет доступных кадров</div>,
      })}
  </>

};

export default MovieStills;