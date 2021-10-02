import { createReducer } from '@reduxjs/toolkit';
import { deletePopup, setPopup, setPopupProduct } from '../actions';

const initialState = {
  popup: null,
  currentProduct: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPopup, (state, action) => {
      state.popup = action.payload;
    })
    .addCase(deletePopup, (state) => {
      state.popup = null;
      state.currentProduct = null;
    })
    .addCase(setPopupProduct, (state, action) => {
      state.currentProduct = action.payload;
    });
});

export {reducer};
