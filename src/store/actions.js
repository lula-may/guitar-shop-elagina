import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  ADD_PRODUCT: 'CART/ADD_PRODUCT',
  DELETE_PRODUCT: 'CART/DELETE_PRODUCT',
  RESET_CATALOG_PAGE: 'CATALOG/RESET_CATALOG_PAGE',
  SET_CATALOG_PAGE: 'CATALOG/SET_CURRENT_PAGE',
  SET_MAX_PRICE: 'CATALOG/SET_MAX_PRICE',
  SET_MIN_PRICE: 'CATALOG/SET_MIN_PRICE',
  SET_PRODUCTS: 'CATALOG/SET_PRODUCTS',
  SET_SORT_DIRECTION: 'CATALOG/SET_SORT_DIRECTION',
  SET_SORT_TYPE: 'CATALOG/SET_SORT_TYPE',
  ADD_STRINGS_FILTER: 'CATALOG/ADD_STRINGS_FILTER',
  ADD_TYPE_FILTER: 'CATALOG/SET_TYPE_FILTER',
  DELETE_TYPE_FILTER: 'CATALOG/DELETE_TYPE_FILTER',
  DELETE_STRINGS_FILTER: 'CATALOG/DELETE_STRINGS_FILTER',
  UPDATE_STRINGS_FILTER: 'CATALOG/UPDATE_STRINGS_FILTER',
  DELETE_POPUP: 'PAGE/DELETE_POPUP',
  SET_POPUP: 'PAGE/SET_POPUP',
  SET_POPUP_PRODUCT: 'PAGE/SET_POPUP_PRODUCT',
};

export const addProduct = createAction(ActionType.ADD_PRODUCT, (product) => ({
  payload: product,
}));

export const deleteProduct = createAction(ActionType.DELETE_PRODUCT, (product) => ({
  payload: product,
}));

export const setProducts = createAction(ActionType.SET_PRODUCTS, (products) => ({
  payload: products,
}));

export const resetCatalogPage = createAction(ActionType.RESET_CATALOG_PAGE);

export const setCatalogPage = createAction(ActionType.SET_CATALOG_PAGE, (pageCount) => ({
  payload: pageCount,
}));

export const setMaxPrice = createAction(ActionType.SET_MAX_PRICE, (price) => ({
  payload: price,
}));

export const setMinPrice = createAction(ActionType.SET_MIN_PRICE, (price) => ({
  payload: price,
}));

export const setSortDirection = createAction(ActionType.SET_SORT_DIRECTION, (direction) => ({
  payload: direction,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (type) => ({
  payload: type,
}));

export const addTypeFilter = createAction(ActionType.ADD_TYPE_FILTER, (type) => ({
  payload: type,
}));

export const deleteTypeFilter = createAction(ActionType.DELETE_TYPE_FILTER, (type) => ({
  payload: type,
}));

export const addStringsFilter = createAction(ActionType.ADD_STRINGS_FILTER, (count) => ({
  payload: count,
}));

export const deleteStringsFilter = createAction(ActionType.DELETE_STRINGS_FILTER, (count) => ({
  payload: count,
}));

export const updateStringsFilter = createAction(ActionType.UPDATE_STRINGS_FILTER, (counts) => ({
  payload: counts,
}));

export const deletePopup = createAction(ActionType.DELETE_POPUP);

export const setPopup = createAction(ActionType.SET_POPUP, (type) => ({
  payload: type,
}));

export const setPopupProduct = createAction(ActionType.SET_POPUP_PRODUCT, (product) => ({
  payload: product,
}));

