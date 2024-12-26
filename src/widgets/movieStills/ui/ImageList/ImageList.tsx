import styles from './styles.module.css';
import { ImageMovie } from '@/entities/movie/model/types';
import Image from '@/shared/ui/Image/Image';

type Props = {
  images: ImageMovie[];
}

const ImageList = ({ images }: Props) => {
  return (
    <ul className={styles.list}>
      {images.map((image: ImageMovie) => (
        <Image key={image.id} image={image.url} alt="кадр из фильма" className={styles.image}/>
      ))}
    </ul>
  );
};

export default ImageList;
