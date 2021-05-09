import React from 'react';
import style from '../../styles/pagination.module.scss';

interface IPaginationProps {
  contentLength: number;
  currentPage: number;
  limit: number;
  onChange: (currentPage: number) => void;
}

const Pagination:React.FunctionComponent<IPaginationProps> = ({
  contentLength,
  currentPage,
  limit,
  onChange,
}: IPaginationProps) => {
  const showPagination = contentLength <= limit;
  return (
    <div className={`flex ${style.paginationWrapper}`}>
      {showPagination && (
        <>
          <button
            type="button"
            id="prev"
            disabled={currentPage === 1}
            onClick={(event) => {
              event.stopPropagation();
              onChange(currentPage - 1);
            }}
            data-xpath="pagination_prevBtn"
          >
            Prev
          </button>
          <button
            type="button"
            id="next"
            disabled={contentLength < limit}
            onClick={(event) => {
              event.stopPropagation();
              onChange(currentPage + 1);
            }}
            data-xpath="pagination_nextBtn"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
