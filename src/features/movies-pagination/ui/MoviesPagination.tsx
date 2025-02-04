import { Pagination } from "@/shared/pagination";

type MoviesPaginationProps = {
  children: React.ReactNode;
  totalPages: number;
  currentPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onPageClick: (page: number) => void;
};

const MoviesPagination = ({
  children,
  totalPages,
  currentPage,
  onPrevPage,
  onNextPage,
  onPageClick,
}: MoviesPaginationProps) => {
  return (
    <>
      {children}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePrevPage={onPrevPage}
        handleNextPage={onNextPage}
        handlePageClick={onPageClick}
      />

    </>
  );
};

export default MoviesPagination;
