import React from "react";
import {BrowserRouter} from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
