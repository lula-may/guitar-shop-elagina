import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ProductInfo from '../product-info/product-info';
import {PRODUCT} from '../props';

export default function ModalAdd({onPopupClose, product}) {
  return (
    <section className="modal modal--add">
      <h2>Добавить товар в корзину</h2>
      <div className="modal__wrapper modal__wrapper--product">
        <ProductInfo product={product}/>
        <button className="modal__button button button--bright" type="button">Добавить в корзину</button>
      </div>
      <button
        className="modal__close"
        onClick={onPopupClose}
        type="button"
        aria-label="Закрыть"
      />
    </section>
  );
}


ModalAdd.propTypes = {
  onPopupClose: PropTypes.func.isRequired,
  product: PRODUCT.isRequired,
};
