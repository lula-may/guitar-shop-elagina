import React, {Fragment, useCallback, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Header from '../header/header';
import Footer from '../footer/footer';
import Popup from '../popup/popup';
import Product from '../product/product';
import Promocode from '../promocode/promocode';

import { useSelector } from 'react-redux';
import { getCartList } from '../../store/cart/selectors';
import { useDispatch } from 'react-redux';
import { deletePopup, setPopup, setPopupProduct } from '../../store/actions';
import { getPopup } from '../../store/page/selectors';
import { PopupType } from '../../const';

const pages = [
  {id: 1, url: '/', text: 'Главная'},
  {id: 2, url: '/', text: 'Каталог'},
  {id: 3, text: 'Оформляем'},
];


export default function Cart() {
  const products = useSelector(getCartList);
  const popup = useSelector(getPopup);
  const dispatch = useDispatch();

  const onDeleteButtonClick = useCallback((product) => {
    dispatch(setPopup(PopupType.DELETE));
    dispatch(setPopupProduct(product));
  }, [dispatch]);

  useEffect(() => {
    if (popup === PopupType.SUCCESS) {
      dispatch(deletePopup());
    }
  });

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
              {products.map((product) => (
                <Product
                  key={product.id}
                  onDeleteButtonClick={onDeleteButtonClick}
                  product={product}
                />))}
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
      {popup && <Popup/>}
    </Fragment>
  );
}
