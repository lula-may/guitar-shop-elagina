import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

import Pagination from '../pagination/pagination';
import ProductCard from '../product-card/product-card';
import Sort from '../sort/sort';
import { selectProductsByPage } from '../../store/catalog/selectors';

export default function Catalog({onCartButtonClick}) {
  const products = useSelector(selectProductsByPage);
  return (
    <section className="main__catalog catalog">
      <h2 className="visually-hidden">Список товаров</h2>
      <Sort/>
      <ul className="catalog__list">
        {products.map((product) => (
          <li key={product.id} className="catalog__item">
            <ProductCard
              product={product}
              onCartButtonClick={onCartButtonClick}
            />
          </li>
        ))}
      </ul>
      <div className="catalog__pagination">
        <Pagination/>
      </div>
    </section>
  );
}

Catalog.propTypes = {
  onCartButtonClick: PropTypes.func.isRequired,
};

