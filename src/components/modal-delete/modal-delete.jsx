import React from 'react';
import './style.scss';

import ProductInfo from '../product-info/product-info';
import PropTypes from 'prop-types';

import {PRODUCT} from '../props';

export default function ModalDelete({onPopupClose, product}) {
  return (
    <section className="modal modal--delete">
      <h2>Удалить этот товар?</h2>
      <div className="modal__wrapper modal__wrapper--product">
        <ProductInfo product={product}/>
        <div className="modal__column">
          <button className="modal__button button button--bright" type="button">Удалить товар</button>
          <button className="modal__button button button--transparent" type="button">Продолжить покупки</button>
        </div>
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

ModalDelete.propTypes = {
  onPopupClose: PropTypes.func.isRequired,
  product: PRODUCT.isRequired,
};
