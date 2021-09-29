import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import Cart from '../cart/cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
