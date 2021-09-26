import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Sort from "../sort/sort";
export default function Catalog() {
  return (
    <section className="main__catalog catalog">
      <h2 className="visually-hidden">Список товаров</h2>
      <Sort/>
      <ul className="catalog__list">
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <img src="img/electro.png" width="68" height="190" alt="Фото гитары" />
            <div className="card__info">
              <div className="card__reviews">15</div>
              <dl>
                <dt>Честер Bass</dt>
                <dd>17 500 ₽</dd>
              </dl>
            </div>
            <div className="card__footer">
              <Link className="card__button button button--dark" to="#">Подробнее</Link>
              <button className="card__button button button--cart" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <img src="img/classic.png" width="68" height="190" alt="Фото гитары" />
            <div className="card__info">
              <div className="card__reviews">15</div>
              <dl>
                <dt>Честер Bass</dt>
                <dd>17 500 ₽</dd>
              </dl>
            </div>
            <div className="card__footer">
              <Link className="card__button button button--dark" to="#">Подробнее</Link>
              <button className="card__button button button--cart" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <img src="img/ukulele.png" width="68" height="190" alt="Фото гитары" />
            <div className="card__info">
              <div className="card__reviews">15</div>
              <dl>
                <dt>Честер Bass</dt>
                <dd>17 500 ₽</dd>
              </dl>
            </div>
            <div className="card__footer">
              <Link className="card__button button button--dark" to="#">Подробнее</Link>
              <button className="card__button button button--cart" type="button">Купить</button>
            </div>
          </article>
        </li>
      </ul>
      <div className="catalog__pagination">
        <div className="pagination">
          <Link className="pagination__button" to="">Назад</Link>
          <Link className="pagination__link pagination__link--current" to="">1</Link>
          <Link className="pagination__link pagination__link" to="">2</Link>
          <Link className="pagination__link pagination__link" to="">...</Link>
          <Link className="pagination__link" to="">7</Link>
          <Link className="pagination__button" to="">Далее</Link>
        </div>
      </div>
    </section>
  );
}
