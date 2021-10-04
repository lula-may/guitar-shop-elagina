import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

import { PromoCode } from '../../utils';
import { setPromoCode } from '../../store/actions';
import { useSelector } from 'react-redux';
import { getPromoCode } from '../../store/cart/selectors';

const promos = Object.keys(PromoCode);

export default function Promocode() {
  const code = useSelector(getPromoCode);
  const [inputValue, setInputValue] = useState(code);
  const dispatch = useDispatch();
  const [isInvalidCode, setIsInvalidCode] = useState(false);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
  }, []);

  const handleInputChange = useCallback((evt) => {
    setInputValue(evt.target.value);
    setIsInvalidCode(false);
  }, []);

  const handleSubmitButtonClick = useCallback((evt) => {
    evt.preventDefault();
    if (promos.includes(inputValue)) {
      dispatch(setPromoCode(inputValue));
    } else {
      setIsInvalidCode(true);
      dispatch(setPromoCode(''));
    }
  }, [dispatch, inputValue]);

  return (
    <div className="cart__promocode promocode">
      <h2>Промокод на скидку</h2>
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <label htmlFor="promo">Введите свой промокод, если он у вас есть.</label>
        <div className="promocode__wrapper">
          <input
            type="text"
            name="promo"
            id="promo"
            onChange={handleInputChange}
            value={inputValue}
          />
          <button
            className="promocode__button button button--plain"
            onClick={handleSubmitButtonClick}
            type="submit"
          >Применить купон
          </button>
          {isInvalidCode && <p className="promocode__error">Промокод не действителен!</p>}
        </div>

      </form>
    </div>
  );
}
