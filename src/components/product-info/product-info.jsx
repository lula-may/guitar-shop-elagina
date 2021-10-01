import React from 'react';

import './style.scss';

import { PRODUCT } from '../props';
import { GuitarOption } from '../../const';

export default function ProductInfo({product}) {
  const {article, name, type, strings, price} = product;
  const {preview, type: text} = GuitarOption[type];

  return (
    <div className="product-info">
      <div className="product-info__image">
        <img src={preview} width="48" height="124" alt={name} />
      </div>
      <div className="product-info__description">
        <h3>Гитара {name}</h3>
        <p>Артикул: {article}</p>
        <p>{text}, {strings} струнная</p>
        <b>Цена: {price.toLocaleString('ru-RU')} ₽</b>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PRODUCT.isRequired,
};
