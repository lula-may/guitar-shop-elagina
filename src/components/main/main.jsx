import React from "react";
import "./style.scss";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Catalog from "../catalog/catalog";
import Filter from "../filter/filter";

const pages = [
  {id: 1, url: '#', text: 'Главная'},
  {id: 2, text: 'Каталог'},
];

export default function Main() {
  return (
    <main className="page__main main">
      <div className="main__wrapper">
        <h1>Каталог гитар</h1>
        <div className="main__breadcrumbs">
          <Breadcrumbs links={pages} />
        </div>
        <div className="main__container">
          <Filter/>
          <Catalog/>
        </div>
      </div>
    </main>
  );
}
