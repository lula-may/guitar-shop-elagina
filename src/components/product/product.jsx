import React from 'react';
import './style.scss';

export default function Product() {
  return (
    <div className="product">
      <button className="product__delete" aria-label="Удалить из корзины"></button>
      <div className="product__info">
        <div className="product__image">
          <img src="img/electro.png" width="48" height="128" alt="Фото гитары " />
        </div>
        <div className="product__description">
          <h2>ЭлектроГитара Честер bass</h2>
          <p>Артикул: SO757575</p>
          <p>Электрогитара, 6 струнная</p>
        </div>
      </div>
      <div className="product__numbers">
        <span className="product__price">17 500 ₽</span>
        <div className="product__counter">
          <button className="product__control product__control--minus" id="minus-1" type="button" aria-label="Уменьшить"/>
          <input type="text" name="counter-1" id="counter-1" defaultValue="12"/>
          <button className="product__control product__control--plus" type="button" aria-label="Увеличить" id="plus-1"/>
        </div>
        <div className="product__total">17 500 ₽</div>
      </div>
    </div>
  );
}
