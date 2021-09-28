import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Header from "../header/header";
import Footer from "../footer/footer";
import Product from "../product/product";
import Promocode from "../promocode/promocode";

const pages = [
  {id: 1, url: '/', text: 'Главная'},
  {id: 2, url: '/', text: 'Каталог'},
  {id: 3, text: 'Оформляем'},
];


export default function Cart() {
  return (
    <Fragment>
      <Header/>
        <main className="page__main main main--cart">
        <div className="main__wrapper">
          <h1>Корзина</h1>
          <div className="main__breadcrumbs">
            <Breadcrumbs links={pages} />
          </div>
          <div className="cart">
            <div className="cart__list">
              <Product/>
              <Product/>
            </div>
            <footer className="cart__footer">
              <div className="cart__container">
                <Promocode/>
                <div className="cart__total">
                  <h2>Всего: 47 000 ₽ </h2>
                  <Link className="cart__button button button--bright" to="">Оформить заказ</Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>

      <Footer/>
    </Fragment>
  );
}
