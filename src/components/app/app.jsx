import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import Cart from '../cart/cart';
import {AppRoute} from '../../const';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.CART}>
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
