import React, {Fragment, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Catalog from '../catalog/catalog';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Header from '../header/header';
import Popup from '../popup/popup';
import { setPopup, setPopupProduct } from '../../store/actions';
import { PopupType } from '../../const';
import { useSelector } from 'react-redux';
import { getPopup } from '../../store/page/selectors';

const pages = [
  {id: 1, url: '/', text: 'Главная'},
  {id: 2, text: 'Каталог'},
];

export default function Main() {
  const popup = useSelector(getPopup);
  const dispatch = useDispatch();

  const onCartButtonClick = useCallback((product) => {
    dispatch(setPopup(PopupType.ADD));
    dispatch(setPopupProduct(product));
  }, [dispatch]);

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
      {popup && <Popup/>}
    </Fragment>
  );
}
