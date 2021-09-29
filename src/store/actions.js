import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  ADD_PRODUCT: 'CART/ADD_PRODUCT',
  DELETE_PRODUCT: 'CART/DELETE_PRODUCT',
  SET_CATALOG_PAGE: 'CATALOG/SET_CURRENT_PAGE',
  SET_PRODUCTS: 'CATALOG/SET_PRODUCTS',
  SET_PRICE_FILTER: 'CATALOG/SET_PRICE_FILTER',
  SET_STRINGS_FILTER: 'CATALOG/SET_STRINGS_FILTER',
  SET_TYPE_FILTER: 'CATALOG/SET_TYPE_FILTER',
  SET_POPUP: 'PAGE/SET_POPUP',
  DELETE_POPUP: 'PAGE/DELETE_POPUP',
};

export const setProducts = createAction(ActionType.SET_PRODUCTS, (products) => ({
  payload: products,
}));

export const setCatalogPage = createAction(ActionType.SET_CATALOG_PAGE, (pageCount) => ({
  payload: pageCount,
}));

export const setPopup = createAction(ActionType.SET_POPUP, (type) => ({
  payload: type,
}));

export const deletePopup = createAction(ActionType.DELETE_POPUP);
