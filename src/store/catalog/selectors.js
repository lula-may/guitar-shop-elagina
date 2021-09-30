import { NameSpace } from '../root-reducer';
import { createSelector } from 'reselect';
import { PRODUCTS_PER_PAGE } from '../../const';
import { sortProductsByFeature } from '../../utils';

const filterProductsByPrice = (items, min=0, max=1000000) => items.filter(({price}) => (price >= min) && (price <= max));

export const getProductsAll = (state) => state[NameSpace.CATALOG].products;

export const getCurrentPage = (state) => state[NameSpace.CATALOG].currentPage;

export const getFilterMaxPrice = (state) => state[NameSpace.CATALOG].maxPrice;
export const getFilterMinPrice = (state) => state[NameSpace.CATALOG].minPrice;

export const getSortDirection = (state) => state[NameSpace.CATALOG].sortDirection;

export const getSortType = (state) => state[NameSpace.CATALOG].sortType;

export const selectProductMaxPrice = createSelector(
  getProductsAll,
  (products) => {
    const prices = products.map(({price}) => price);
    return Math.max(...prices);
  },
);

export const selectProductMinPrice = createSelector(
  getProductsAll,
  (products) => {
    const prices = products.map(({price}) => price);
    return Math.min(...prices);
  },
);

const selectProductsByPrice = createSelector(
  getProductsAll,
  getFilterMinPrice,
  getFilterMaxPrice,
  (products, minPrice, maxPrice) => {
    if (minPrice || maxPrice) {
      return filterProductsByPrice(products, minPrice, maxPrice);
    }
    return products;
  },
);

export const selectSortedProducts = createSelector(
  selectProductsByPrice,
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
  selectProductsByPrice,
  (products) => Math.ceil(products.length / PRODUCTS_PER_PAGE),
);
