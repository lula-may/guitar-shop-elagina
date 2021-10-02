import { createReducer } from '@reduxjs/toolkit';
import { deleteElementById } from '../../utils';
import { addProduct, deleteProduct } from '../actions';

const initialState = {
  cart: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      state.cart = [...state.cart, action.payload];
    })
    .addCase(deleteProduct, (state, action) => {
      state.cart = deleteElementById(state.cart, action.payload.id);
    });
});

export {reducer};
