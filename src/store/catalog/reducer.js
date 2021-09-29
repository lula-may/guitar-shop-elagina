import { createReducer } from '@reduxjs/toolkit';
import { setCatalogPage, setProducts } from '../actions';

const initialState = {
  currentPage: 1,
  products: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCatalogPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(setProducts, (state, action) => {
      state.products = action.payload;
    });
});

export {reducer};
