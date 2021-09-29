import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './style.scss';
import App from './components/app/app';
import { products } from './mocks/data';
import { rootReducer } from './store/root-reducer';
import { setProducts } from './store/actions';

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(setProducts(products));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

