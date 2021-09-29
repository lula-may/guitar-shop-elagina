import { NameSpace } from '../root-reducer';
import { createSelector } from 'reselect';
import { PRODUCTS_PER_PAGE } from '../../const';
import { sortProductsByFeature } from '../../utils';

export const getProductsAll = (state) => state[NameSpace.CATALOG].products;

export const getCurrentPage = (state) => state[NameSpace.CATALOG].currentPage;

export const getSortDirection = (state) => state[NameSpace.CATALOG].sortDirection;

export const getSortType = (state) => state[NameSpace.CATALOG].sortType;

export const selectSortedProducts = createSelector(
  getProductsAll,
  getSortType,
  getSortDirection,
  (products, sort, direction) => sortProductsByFeature(products, sort, direction),
);

export const selectProductsByPage = createSelector(
  selectSortedProducts,
  getCurrentPage,
  (products, pageCount) => {
    const start = (pageCount - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    return products.slice(start, end);
  },
);
export const selectLastPage = createSelector(
  getProductsAll,
  (products) => Math.ceil(products.length / PRODUCTS_PER_PAGE),
);
