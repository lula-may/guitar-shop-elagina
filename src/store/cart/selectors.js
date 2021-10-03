import { createSelector } from 'reselect';
import { NameSpace } from '../root-reducer';
import { PromoCode } from '../../utils';

export const getCartList = (state) => state[NameSpace.CART].cart;

export const getPromoCode = (state) => state[NameSpace.CART].promocode;

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

export const selectCartPriceWithDiscount = createSelector(
  selectCartTotalPrice,
  getPromoCode,
  (price, code) => {
    if (code) {
      const getPriceWithDiscount = PromoCode[code];
      return getPriceWithDiscount(price);
    }
    return price;
  },
);
