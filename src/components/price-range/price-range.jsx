import React, { useCallback, useState } from 'react';
import NumberFormat from 'react-number-format';
import './style.scss';
import { useSelector } from 'react-redux';
import { resetCatalogPage, setMaxPrice as setFilterMaxPrice, setMinPrice as setFilterMinPrice } from '../../store/actions';
import { selectProductMaxPrice, selectProductMinPrice } from '../../store/catalog/selectors';
import { useDispatch } from 'react-redux';
import { ENTER_KEY } from '../../const';

const constrainValue = (value, min, max) => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

export default function PriceRange() {
  const max = useSelector(selectProductMaxPrice);
  const min = useSelector(selectProductMinPrice);
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);
  const dispatch = useDispatch();

  const doOnPriceChange = useCallback((minValue, maxValue) => {
    dispatch(setFilterMinPrice(minValue));
    dispatch(setFilterMaxPrice(maxValue));
    dispatch(resetCatalogPage());
  }, [dispatch]);

  const changeMinPrice = useCallback(() => {
    const minValue = (minPrice === undefined) ? min : constrainValue(minPrice, min, maxPrice);
    doOnPriceChange(minValue, maxPrice);
    setMinPrice(minValue);
  }, [doOnPriceChange, maxPrice, min, minPrice]);

  const changeMaxPrice = useCallback(() => {
    const maxValue = (maxPrice === undefined) ? max : constrainValue(maxPrice, minPrice, max);
    doOnPriceChange(minPrice, maxValue);
    setMaxPrice(maxValue);
  }, [doOnPriceChange, maxPrice, max, minPrice]);


  const handleMinPriceBlur = useCallback(() => changeMinPrice(), [changeMinPrice]);

  const handleMaxPriceBlur = useCallback(() => changeMaxPrice(), [changeMaxPrice]);

  const handleEnterPress = useCallback((evt) => {
    if (evt.key === ENTER_KEY) {
      switch (evt.target.id) {
        case 'price-min':
          changeMinPrice();
          break;
        case 'price-max':
          changeMaxPrice();
          break;
        default: break;
      }
    }
  }, [changeMaxPrice, changeMinPrice]);

  const handleMinFocus = useCallback(() => setMinPrice(''), []);
  const handleMaxFocus = useCallback(() => setMaxPrice(''), []);

  return (
    <div className="price-range">
      <div className="price-range__field">
        <NumberFormat
          id="price-min"
          type="text"
          thousandSeparator=" "
          allowNegative={false}
          allowLeadingZeros={false}
          onBlur={handleMinPriceBlur}
          onFocus={handleMinFocus}
          onKeyPress={handleEnterPress}
          onValueChange={({floatValue}) => setMinPrice(floatValue)}
          value={minPrice}
        />
        <label className="visually-hidden" htmlFor="price-min">Минимальная цена</label>
      </div>
      <div className="price-range__dash"/>
      <div className="price-range__field">
        <NumberFormat
          id="price-max"
          type="text"
          thousandSeparator=" "
          allowNegative={false}
          allowLeadingZeros={false}
          value={maxPrice}
          onBlur={handleMaxPriceBlur}
          onFocus={handleMaxFocus}
          onKeyPress={handleEnterPress}
          onValueChange={({floatValue}) => setMaxPrice(floatValue)}
        />
        <label className="visually-hidden" htmlFor="price-max">Максимальная цена</label>
      </div>
    </div>
  );
}
