import { createReducer } from '@reduxjs/toolkit';
import { resetCatalogPage, setCatalogPage, setMaxPrice, setMinPrice, setProducts, setSortDirection, setSortType } from '../actions';

const initialState = {
  currentPage: 1,
  maxPrice: null,
  minPrice: null,
  products: [],
  sortDirection: null,
  sortType: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCatalogPage, (state) => {
      state.currentPage = 1;
    })
    .addCase(setCatalogPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(setProducts, (state, action) => {
      state.products = action.payload;
    })
    .addCase(setMaxPrice, (state, action) => {
      state.maxPrice = action.payload;
    })
    .addCase(setMinPrice, (state, action) => {
      state.minPrice = action.payload;
    })
    .addCase(setSortDirection, (state, action) => {
      state.sortDirection = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {reducer};
