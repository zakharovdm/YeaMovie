import styles from './Image.module.css';

interface Props {
  image?: string;
  alt: string;
  className?: string;
}

const Image = ({ image, alt, className }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt={alt} className={`${className} ${styles.image}`} /> : null}
    </div>
  );
};

export default Image;
