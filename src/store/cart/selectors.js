import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';

export const getCartList = (state) => state[NameSpace.CART].cart;

export const selectCartCount = createSelector(
  getCartList,
  (products) => products.reduce((acc, item) => acc + item.counter, 0),
);

export const selectCartTotalPrice = createSelector(
  getCartList,
  (products) => products.reduce((acc, item) => {
    const {price} = item.product;
    return acc + price * item.counter;
  }, 0),
);
