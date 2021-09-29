import { createReducer } from '@reduxjs/toolkit';
import { setCatalogPage, setProducts, setSortDirection, setSortType } from '../actions';

const initialState = {
  currentPage: 1,
  products: [],
  sortDirection: null,
  sortType: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCatalogPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(setProducts, (state, action) => {
      state.products = action.payload;
    })
    .addCase(setSortDirection, (state, action) => {
      state.sortDirection = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
