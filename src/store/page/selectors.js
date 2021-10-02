import { NameSpace } from '../root-reducer';

export const getPopup = (state) => state[NameSpace.PAGE].popup;
export const getCurrentProduct = (state) => state[NameSpace.PAGE].currentProduct;
