import { createReducer } from '@reduxjs/toolkit';
import { setProducts } from '../actions';

const initialState = {
  products: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setProducts, (state, action) => {
      state.products = action.payload;
    });
});

export {reducer};
