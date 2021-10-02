import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { PRODUCT } from '../props';
import { GuitarOption } from '../../const';

export default function Product({onDeleteButtonClick, product}) {
  const {article, name, type, strings, price} = product;
  const {preview, type: text} = GuitarOption[type];
  const totalPrice = price;

  const handleDeleteButtonClick = useCallback(() => onDeleteButtonClick(product), [onDeleteButtonClick, product]);

  return (
    <div className="product">
      <button
        className="product__delete"
        onClick={handleDeleteButtonClick}
        aria-label="Удалить из корзины"
      />
      <div className="product__info">
        <div className="product__image">
          <img src={preview} width="48" height="128" alt="Фото гитары " />
        </div>
        <div className="product__description">
          <h2>Гитара {name}</h2>
          <p>Артикул: {article}</p>
          <p>{text}, {strings} струнная</p>
        </div>
      </div>
      <div className="product__numbers">
        <span className="product__price">{price.toLocaleString('ru-RU')} ₽</span>
        <div className="product__counter">
          <button className="product__control product__control--minus" id="minus-1" type="button" aria-label="Уменьшить"/>
          <input type="text" name="counter-1" id="counter-1" value="1" onChange={() => {}}/>
          <button className="product__control product__control--plus" type="button" aria-label="Увеличить" id="plus-1"/>
        </div>
        <div className="product__total">{totalPrice.toLocaleString('ru-RU')} ₽</div>
      </div>
    </div>
  );
}

Product.propTypes = {
  onDeleteButtonClick: PropTypes.func.isRequired,
  product: PRODUCT.isRequired,
};
