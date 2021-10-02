import { createReducer } from '@reduxjs/toolkit';
import { addStringsFilter, addTypeFilter, deleteStringsFilter, deleteTypeFilter, resetCatalogPage, setCatalogPage, setMaxPrice, setMinPrice, setProducts, setSortDirection, setSortType, updateStringsFilter } from '../actions';
import { deleteElement } from '../../utils';

const initialState = {
  currentPage: 1,
  maxPrice: null,
  minPrice: null,
  products: [],
  typeFilters: [],
  stringsFilters: [],
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
    })
    .addCase(addTypeFilter, (state, action) => {
      state.typeFilters = [...state.typeFilters, action.payload];
    })
    .addCase(addStringsFilter, (state, action) => {
      state.stringsFilters = [...state.stringsFilters, action.payload];
    })
    .addCase(deleteTypeFilter, (state, action) => {
      state.typeFilters = deleteElement(state.typeFilters, action.payload);
    })
    .addCase(deleteStringsFilter, (state, action) => {
      state.stringsFilters = deleteElement(state.stringsFilters, action.payload);
    })
    .addCase(updateStringsFilter, (state, action) => {
      state.stringsFilters = action.payload;
    });
});

export {reducer};
