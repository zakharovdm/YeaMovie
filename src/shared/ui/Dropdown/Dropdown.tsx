import { Option } from '@/entities/movie/api/filterApi';
import styles from './styles.module.css';

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
        {data?.map((item) => {
          switch (name) {
            case 'genres':
            case 'country':
              if (typeof item === 'object') {
                return (<option key={item.slug} value={item.name}>{item.name}</option>);
              }
              return null;
            case 'year': {
              const yearValue = typeof item === 'number' ? item : Number(item);
              return (<option key={yearValue} value={yearValue}>{yearValue}</option>);
            }
            case 'rating': {
              if (typeof item === 'number') { 
              return (
                <option key={item} value={`${item}-10`}>
                  от {item}
                </option>
              );
            }
              return null;
            }
            default:
              return null;
          }
        })}
      </select>
    </div>
  )
};

export default Dropdown;
