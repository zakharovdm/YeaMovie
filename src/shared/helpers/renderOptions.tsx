import { Option } from '@/entities/movie/api/filterApi';
import { capitalizeFirstLetter } from '@/shared/helpers/helpers';

export type Props = {
  name: string;
  item: Option | string | number;
};

export const renderOption = ({ name, item }: Props) => {
  switch (name) {
    case 'genres':
    case 'country': {
      if (typeof item === 'object' && item !== null) {
        const displayName =
          name === 'genres' ? capitalizeFirstLetter(item.name) : item.name;
        return (
          <option key={item.slug} value={item.name}>
            {displayName}
          </option>
        );
      }
      return null;
    }
    case 'year': {
      const yearValue = typeof item === 'number' ? item : Number(item);
      if (isNaN(yearValue)) return null;
      return (
        <option key={yearValue} value={yearValue}>
          {yearValue}
        </option>
      );
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
};
