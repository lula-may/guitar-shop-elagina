import React, { useCallback, useMemo } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import { PRODUCT } from '../props';
import { GuitarOption } from '../../const';

const getRatingWidth = (rating) => `${Math.round(rating * 20)}%`;

export default function ProductCard({product, onCartButtonClick}) {
  const {
    name,
    rating,
    reviews,
    price,
    type,
  } = product;

  const {urls} = GuitarOption[type];
  const [url, url2x] = urls;
  const ratingStyle = useMemo(() => ({width: getRatingWidth(rating)}), [rating]);
  const handleCartButtonClick = useCallback(() => onCartButtonClick(product), [onCartButtonClick, product]);

  return (
    <article className="card">
      <h3 className="visually-hidden">Карточка товара</h3>
      <div className="card__image"><img src={url} srcSet={`${url2x} 2x`} width="68" height="190" alt={name} /></div>
      <div className="card__reviews">
        <div className="rating">
          <span className="rating__active" style={ratingStyle}></span>
        </div>
        <span className="card__reviews-count">{reviews}</span>
      </div>
      <dl className="card__info">
        <dt>{name}</dt>
        <dd>{price.toLocaleString('ru-RU')}&nbsp;₽</dd>
      </dl>
      <div className="card__footer">
        <Link className="card__button button button--plain" to="#">Подробнее</Link>
        <button
          className="card__button card__button--cart button button--bright"
          type="button"
          onClick={handleCartButtonClick}
        >Купить
        </button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  onCartButtonClick: PropTypes.func.isRequired,
  product: PRODUCT.isRequired,
};
