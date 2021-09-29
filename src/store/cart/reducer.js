import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const reducer = createReducer(initialState, (builder) => {});

export {reducer};
