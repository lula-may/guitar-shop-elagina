import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';
import { getCurrentPage, selectLastPage } from '../../store/catalog/selectors';
import { getClassName, getPagesList } from '../../utils';
import { useDispatch } from 'react-redux';
import { setCatalogPage } from '../../store/actions';

export default function Pagination() {
  const currentPage = useSelector(getCurrentPage);
  const lastPage = useSelector(selectLastPage);
  const dispatch = useDispatch();

  const pages = getPagesList(currentPage, lastPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const handleBackButtonClick = useCallback(() => dispatch(setCatalogPage(currentPage - 1)), [currentPage, dispatch]);

  const handleForwardButtonClick = useCallback(() => dispatch(setCatalogPage(currentPage + 1)), [currentPage, dispatch]);

  const handlePageButtonClick = useCallback((evt) => dispatch(setCatalogPage(Number(evt.target.id))), [dispatch]);

  const renderPaginationItem = useCallback((value, index) => {
    const isCurrentPage = value === currentPage;
    if (value) {
      return (
        <button
          className={getClassName('pagination__item', 'pagination__link', isCurrentPage && 'pagination__link--current')}
          id={value}
          key={value}
          disabled={isCurrentPage}
          onClick={handlePageButtonClick}
        >{value}
        </button>
      );
    }
    return (
      <span key={`dots-${index}`} className="pagination__item pagination__dots">...</span>
    );
  }, [currentPage, handlePageButtonClick]);

  if (!pages.length) {
    return null;
  }

  return (
    <div className="pagination">
      {!isFirstPage &&
        <button
          className="pagination__item pagination__button pagination__button--back"
          onClick={handleBackButtonClick}
        >Назад
        </button>}
      {pages.map((value, ind) => renderPaginationItem(value, ind))}
      {!isLastPage &&
        <button
          className="pagination__item pagination__button pagination__button--forward"
          onClick={handleForwardButtonClick}
        >Далее
        </button>}
    </div>
  );
}
