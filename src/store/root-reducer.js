import { combineReducers } from 'redux';
import {reducer as cartReducer} from './cart/reducer';
import {reducer as catalogReducer} from './catalog/reducer';
import {reducer as pageReducer} from './page/reducer';

export const NameSpace = {
  CART: 'CART',
  CATALOG: 'CATALOG',
  PAGE: 'PAGE',
};

export const rootReducer = combineReducers({
  [NameSpace.CART]:cartReducer,
  [NameSpace.CATALOG]:catalogReducer,
  [NameSpace.PAGE]: pageReducer,
});
