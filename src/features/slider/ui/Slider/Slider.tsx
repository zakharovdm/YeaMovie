import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { START_PAGE_NUMBER } from '@/shared/constants';
import { useGetMoviesQuery } from '@/entities/movie/api/moviesApi';
import { useEffect, useState } from 'react';

import Image from '@/shared/ui/Image/Image'; import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from './styles.module.css';
import { Movie } from '@/entities/movie';
import { Link } from 'react-router-dom';


const Slider = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const [page, setPage] = useState(START_PAGE_NUMBER);
  const [slides, setSlides] = useState<Movie[]>([]);

  const { data, isFetching } = useGetMoviesQuery({
    page: page,
    limit: 10,
    notNullFields: 'backdrop.url',
    sortField: 'rating.kp',
    sortType: '1',
    'releaseYears.start': year,
  });

  useEffect(() => {
    if (data?.docs) {
      setSlides((prevSlides) => [...prevSlides, ...data.docs]);
    }
  }, [data]);

  const handleSlideChange = (swiper: { activeIndex: number; }) => {
    if (swiper.activeIndex >= slides.length - 3 && !isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      speed={900}
      autoplay={{ delay: 10000 }}
      navigation={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      onSlideChange={handleSlideChange}
      className={styles.swiper}>
      {slides.map((slide, index) => (
        <SwiperSlide key={`${slide.id} - ${index + 1}`} className={styles.slide}>
          <div className={styles.overlay}></div>
          <Image className={styles.poster} image={slide.backdrop?.url} alt="Постер фильма" />
          <Link to={`/details/${slide.id}`} target='_blank' rel="noopener noreferrer">
            <h3 className={styles.title}>{slide.name}</h3>
          </Link>
        </SwiperSlide>

      ))}
    </Swiper>
  );
};

export default Slider;
