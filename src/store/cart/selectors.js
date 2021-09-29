import { NameSpace } from '../root-reducer';

export const getCartList = (state) => state[NameSpace.CART].cart;
