import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';

import { PRODUCT } from '../props';
import { GuitarOption, PopupType } from '../../const';
import { setPopup, setPopupProduct, updateCartProduct } from '../../store/actions';

const SYMBOL_WIDTH = 10;

const getInputStyle = (counter) => {
  const counterLength = counter.toString().length;
  if (counterLength < 3) {
    return null;
  }
  const inputWidth = SYMBOL_WIDTH * counterLength + 6;
  return {width: `${inputWidth}px`};
};

export default function Product({counter, product}) {
  const {article, id, name, type, strings, price} = product;
  const {previews, type: text} = GuitarOption[type];
  const [preview, preview2x] = previews;
  const [currentCounter, setCurrentCounter]= useState(counter);
  const totalPrice = price * counter;
  const dispatch = useDispatch();

  const openPopup = useCallback(() => {
    dispatch(setPopup(PopupType.DELETE));
    dispatch(setPopupProduct(product));
  }, [dispatch, product]);

  const handlePlusButtonClick = useCallback(() => {
    dispatch(updateCartProduct({product, counter: counter + 1}));
    setCurrentCounter((prevCounter) => prevCounter + 1);
  }, [counter, dispatch, product]);

  const handleMinusButtonClick = useCallback(() => {
    if (counter > 1) {
      dispatch(updateCartProduct({product, counter: counter - 1}));
      setCurrentCounter((prevCounter) => prevCounter - 1);
    } else {
      openPopup();
    }
  }, [counter, dispatch, openPopup, product]);

  const handleCountInputChange = useCallback(({target}) => {
    if (target.value === '') {
      setCurrentCounter('');
      return;
    }
    const newValue = Number(target.value);
    if (isNaN(newValue)) {
      return;
    }
    if (newValue === 0) {
      openPopup();
      setCurrentCounter(counter);
      return;
    }
    dispatch(updateCartProduct({product, counter: newValue}));
    setCurrentCounter(newValue);
  }, [counter, dispatch, openPopup, product]);

  const handleInputBlur = useCallback(({target}) => {
    if (target.value === '') {
      openPopup();
      setCurrentCounter(counter);
    }
  }, [counter, openPopup]);

  const handleDeleteButtonClick = useCallback(() => openPopup(), [openPopup]);

  return (
    <div className="product">
      <button
        className="product__delete"
        onClick={handleDeleteButtonClick}
        aria-label="Удалить из корзины"
      />
      <div className="product__info">
        <div className="product__image">
          <img src={preview} srcSet={`${preview2x} 2x`} width="48" height="128" alt="Фото гитары " />
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
          <button
            className="product__control product__control--minus"
            onClick={handleMinusButtonClick}
            type="button"
            aria-label="Уменьшить"
          />
          <input
            type="text"
            name={`counter-${id}`}
            id={`counter-${id}`}
            value={currentCounter}
            onChange={handleCountInputChange}
            onBlur={handleInputBlur}
            style={getInputStyle(currentCounter)}
          />
          <button
            className="product__control product__control--plus"
            onClick={handlePlusButtonClick}
            type="button"
            aria-label="Увеличить"
          />
        </div>
        <div className="product__total">{totalPrice.toLocaleString('ru-RU')} ₽</div>
      </div>
    </div>
  );
}

Product.propTypes = {
  counter: PropTypes.number.isRequired,
  product: PRODUCT.isRequired,
};
