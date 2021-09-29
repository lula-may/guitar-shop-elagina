import { NameSpace } from '../root-reducer';

export const getProductsAll = (state) => state[NameSpace.CATALOG].products;
