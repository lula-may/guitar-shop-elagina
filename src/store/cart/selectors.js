import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';

export const getCartList = (state) => state[NameSpace.CART].cart;

export const selectCartCount = createSelector(
  getCartList,
  (list) => list.length,
);
