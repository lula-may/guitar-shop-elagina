import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';

import ProductCard from '../product-card/product-card';
import Sort from '../sort/sort';
import { getProductsAll } from '../../store/catalog/selectors';

export default function Catalog() {
  const products = useSelector(getProductsAll);
  return (
    <section className="main__catalog catalog">
      <h2 className="visually-hidden">Список товаров</h2>
      <Sort/>
      <ul className="catalog__list">
        {products.map((product) => (
          <li key={product.id} className="catalog__item">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="catalog__pagination">
        <div className="pagination">
          <Link className="pagination__item pagination__button pagination__button--back" to="">Назад</Link>
          <Link className="pagination__item pagination__link pagination__link--current">1</Link>
          <Link className="pagination__item pagination__link" to="">2</Link>
          <span className="pagination__item pagination__dots">...</span>
          <Link className="pagination__item pagination__link" to="">7</Link>
          <Link className="pagination__item pagination__button pagination__button--forward" to="">Далее</Link>
        </div>
      </div>
    </section>
  );
}

