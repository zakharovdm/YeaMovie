import { useSearchParams } from 'react-router-dom';
import { START_PAGE_NUMBER } from '../constants';
import { useRef } from 'react';

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || START_PAGE_NUMBER);
  const totalPagesRef = useRef(1);

  const syncTotalPages = (newTotal: number) => {
    totalPagesRef.current = newTotal;
  };
  const handlePrevPage = () =>
    setSearchParams({
      page: String(page > 1 ? page - 1 : totalPagesRef.current),
    });
  const handleNextPage = () =>
    setSearchParams({
      page: String(page >= totalPagesRef.current ? 1 : page + 1),
    });
  const handlePageClick = (page: number) =>
    setSearchParams({ page: String(page) });

  return {
    page,
    handlePrevPage,
    handleNextPage,
    handlePageClick,
    syncTotalPages,
  };
};
