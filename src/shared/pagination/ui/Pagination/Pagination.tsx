import { PaginationProps } from '../../model/types';
import styles from './styles.module.css';

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePageClick,
  handlePrevPage,
  currentPage,
}: PaginationProps) => {

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} onClick={handlePrevPage}>{'<'}</button>
      <div className={styles.listNumbers}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button className={styles.arrow} onClick={handleNextPage}>{'>'}</button>
    </div>
  );
};

export default Pagination;
