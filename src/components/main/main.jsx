import React, {Fragment, useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Catalog from '../catalog/catalog';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Header from '../header/header';
import Popup from '../popup/popup';
import { addProduct, deleteProduct } from '../../store/actions';
import { PopupType } from '../../const';

const pages = [
  {id: 1, url: '/', text: 'Главная'},
  {id: 2, text: 'Каталог'},
];

export default function Main() {
  const [popupType, setPopupType] = useState(null);
  const [popupProduct, setPopupProduct] = useState(null);
  const dispatch = useDispatch();

  const onCartButtonClick = useCallback((product) => {
    setPopupType(PopupType.ADD);
    setPopupProduct(product);
  }, []);

  const onPopupClose = useCallback(() => {
    setPopupType(null);
    setPopupProduct(null);
  }, []);

  const onAddToCartClick = useCallback(() => {
    dispatch(addProduct(popupProduct));
    setPopupType(PopupType.SUCCESS);
    setPopupProduct(null);
  }, [dispatch, popupProduct]);

  const onDeleteFromCartClick = useCallback(() => {
    dispatch(deleteProduct(popupProduct));
    onPopupClose();
  }, [dispatch, onPopupClose, popupProduct]);

  return (
    <Fragment>
      <Header/>
      <main className="page__main main main--catalog">
        <div className="main__wrapper">
          <h1>Каталог гитар</h1>
          <div className="main__breadcrumbs">
            <Breadcrumbs links={pages} />
          </div>
          <div className="main__container">
            <Filter/>
            <Catalog onCartButtonClick={onCartButtonClick} />
          </div>
        </div>
      </main>
      <Footer/>
      {popupType &&
        <Popup
          onAddToCartClick={onAddToCartClick}
          onDeleteFromCartClick={onDeleteFromCartClick}
          onPopupClose={onPopupClose}
          product={popupProduct}
          type={popupType}
        />}
    </Fragment>
  );
}
