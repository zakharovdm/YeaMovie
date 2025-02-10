import { Option } from '@/entities/movie/api/moviesApi'
import styles from './styles.module.css';
import { renderOption } from '@/shared/helpers/renderOptions';

type Props = {
  name: string,
  value?: string | number,
  data: Array<Option | string | number> | undefined
}

const Dropdown = ({ name, value, data }: Props) => {
  return (
    <div className={styles.selectWrapper}>
      <select className={styles.select} name={name} id={name}>
        <option value={value}>{value}</option>
        {data?.map((item) => renderOption({ name, item }))}
      </select>
    </div>
  );
};

export default Dropdown;
