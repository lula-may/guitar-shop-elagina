import { createReducer } from '@reduxjs/toolkit';
import { deleteProductById, replaceCartElement } from '../../utils';
import { addProduct, deleteProduct, updateCartProduct } from '../actions';

const initialState = {
  cart: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      state.cart = [...state.cart, action.payload];
    })
    .addCase(deleteProduct, (state, action) => {
      state.cart = deleteProductById(state.cart, action.payload.id);
    })
    .addCase(updateCartProduct, (state, action) => {
      state.cart = replaceCartElement(state.cart, action.payload);
    });
});

export {reducer};
