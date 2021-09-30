import React, { useCallback, useState } from 'react';
import NumberFormat from 'react-number-format';
import './style.scss';
import { useSelector } from 'react-redux';
import { resetCatalogPage, setMaxPrice as setFilterMaxPrice, setMinPrice as setFilterMinPrice } from '../../store/actions';
import { selectProductMaxPrice, selectProductMinPrice } from '../../store/catalog/selectors';
import { useDispatch } from 'react-redux';

export default function PriceRange() {
  const max = useSelector(selectProductMaxPrice);
  const min = useSelector(selectProductMinPrice);
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);
  const dispatch = useDispatch();

  const doOnPriceChange = useCallback(() => {
    dispatch(setFilterMinPrice(minPrice));
    dispatch(setFilterMaxPrice(maxPrice));
    dispatch(resetCatalogPage());
  }, [dispatch, maxPrice, minPrice]);

  const handleMinPriceChange = useCallback(() => {
    if (minPrice > maxPrice) {
      setMinPrice(maxPrice);
    }
    if (minPrice < min) {
      setMinPrice(min);
    }
    doOnPriceChange();
  }, [doOnPriceChange, maxPrice, min, minPrice]);

  const handleMaxPriceChange = useCallback(() => {
    if (maxPrice < minPrice) {
      setMaxPrice(minPrice);
    }
    if (maxPrice > max) {
      setMaxPrice(max);
    }
    doOnPriceChange();
  }, [doOnPriceChange, max, maxPrice, minPrice]);

  return (
    <div className="price-range">
      <div className="price-range__field">
        <NumberFormat
          id="price-min"
          type="text"
          thousandSeparator=" "
          allowNegative={false}
          isNumericString
          onValueChange={({value}) => setMinPrice(Number(value))}
          onBlur={handleMinPriceChange}
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
          isNumericString
          value={maxPrice}
          onValueChange={({value}) => setMaxPrice(Number(value))}
          onBlur={handleMaxPriceChange}
        />
        <label className="visually-hidden" htmlFor="price-max">Максимальная цена</label>
      </div>
    </div>
  );
}
