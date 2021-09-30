import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SortDirection, SortType } from '../../const';
import { resetCatalogPage, setSortDirection, setSortType } from '../../store/actions';
import { getSortDirection, getSortType } from '../../store/catalog/selectors';
import { getClassName } from '../../utils';
import './style.scss';

const types = Object.values(SortType);

const TypeToText = {
  price: 'по цене',
  reviews: 'по популярности',
};

const directions = [
  {
    title: SortDirection.UP,
    text: 'По возрастанию',
  },
  {
    title: SortDirection.DOWN,
    text: 'По убыванию',
  },
];

export default function Sort() {
  const currentSort = useSelector(getSortType);
  const currentDirection = useSelector(getSortDirection);
  const dispatch = useDispatch();

  const handleSortTypeButtonClick = useCallback((evt) => {
    evt.preventDefault();
    if (evt.target.id !== currentSort) {
      dispatch(setSortType(evt.target.id));
      dispatch(resetCatalogPage());
      if (!currentDirection) {
        dispatch(setSortDirection(SortDirection.UP));
      }
    }
  }, [currentDirection, currentSort, dispatch]);

  const handleSortDirectionButtonClick = useCallback((evt) => {
    evt.preventDefault();
    if (evt.currentTarget.id !== currentDirection) {
      dispatch(setSortDirection(evt.currentTarget.id));
      dispatch(resetCatalogPage());
      if (!currentSort) {
        dispatch(setSortType(SortType.PRICE));
      }
    }
  }, [currentDirection, currentSort, dispatch]);

  return (
    <div className="catalog__sort sort">
      <div className="sort__wrapper">
        <span className="sort__label">Сортировать:</span>
        <div className="sort__types">
          {types.map((type) => (
            <button
              key={type}
              className={getClassName('sort__feature', (type === currentSort) && 'sort__feature--active')}
              id={type}
              onClick={handleSortTypeButtonClick}
            >{TypeToText[type]}
            </button>
          ))}
        </div>
        <div className="sort__directions">
          {directions.map(({title, text}) => (
            <button
              key={title}
              id={title}
              className={getClassName('sort__button', (title === currentDirection) && 'sort__button--active')}
              onClick={handleSortDirectionButtonClick}
              aria-label={text}
            >
              <svg className="sort__icon" width="14" height="11">
                <use xlinkHref={`#sort-${title}`}></use>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
