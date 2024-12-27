import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from 'swiper/types';
import { useState } from 'react';
import { ImageMovie } from '@/entities/movie/model/types';
import Image from '@/shared/ui/Image/Image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from './styles.module.css';


type Props = {
  images: ImageMovie[];
}

const GallerySlider = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiper}
      >
        {images.map((image: ImageMovie) => (
          <SwiperSlide key={image.id} className={styles.swiperSlide}>
            <img src={image.url} alt="Кадр из фильма" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((image: ImageMovie) => (
          <SwiperSlide key={image.id} className={styles.swiperSlide2}>
            <Image image={image.url} alt="Кадр из фильма" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GallerySlider;
