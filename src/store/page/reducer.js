import { createReducer } from '@reduxjs/toolkit';
import { deletePopup, setPopup } from '../actions';

const initialState = {
  popup: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPopup, (state, action) => {
      state.popup = action.payload;
    })
    .addCase(deletePopup, (state) => {
      state.popup = null;
    });
});

export {reducer};
