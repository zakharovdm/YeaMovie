import { useGetImagesFromMovieQuery } from '@/entities/movie/api/moviesApi';
import { useState } from 'react';
import { START_PAGE_NUMBER } from '@/shared/constants';
import ImageList from '../ImageList/ImageList';
import ButtonViewAll from '@/shared/ui/ButtonViewAll/ButtonViewAll';
import Modal from '@/shared/ui/Modal/Modal';
import styles from './styles.module.css';
import { GallerySlider } from '@/features/gallery';

type Props = {
  movieId: string
}

const MovieStills = ({ movieId }: Props) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);
  const { data } = useGetImagesFromMovieQuery({ page: START_PAGE_NUMBER, limit: 250, type: 'still', movieId });

  return <>
    <div className={styles.inner}>
      <h3 className={styles.title}>Кадры из фильма</h3>
    </div>
    <div className={styles.innerButton}>
      <ButtonViewAll onClick={openGallery} />
    </div>
    {data ?
      (<>
      <ImageList images={data.docs.slice(0, 6)} />
      <Modal isOpen={isGalleryOpen} onClose={closeGallery}>
        <GallerySlider images={data?.docs} />
      </Modal>
      </>)
      : <div>Нет доступных кадров</div>}

  </>

};

export default MovieStills;