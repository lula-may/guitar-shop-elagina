import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const breadcrumbs = [
  {id: 1, url: '#', text: 'Главная'},
  {id: 2, text: 'Каталог'},
];

export default function Main() {
  return (
    <main className="page__main main">
      <div className="main__wrapper">
        <h1>Каталог гитар</h1>
        <div className="main__breadcrumbs">
          <Breadcrumbs links={breadcrumbs} />
        </div>
        <div className="main__container">
          <section className="main__filter filter">
            <h2>Фильтр</h2>
            <div className="filter__item">
              <h3>Цена, ₽</h3>
              <div className="filter__price price-range">
                <div className="price-range__field">
                  <input id="price-min" type="text" value="1 000" />
                  <label className="visually-hidden" htmlFor="price-min">Минимальная цена</label>
                </div>
                <div className="price-range__field">
                  <input id="price-max" type="text" value="30 000"/>
                  <label className="visually-hidden" htmlFor="price-max">Максимальная цена</label>
                </div>
              </div>
            </div>
            <div className="filter__item">
              <h3>Тип гитар</h3>
              <ul className="checkbox-list">
                <li className="checkbox-list__item">
                  <label htmlFor="type-1">Акустические гитары</label>
                  <input type="checkbox" name="type" id="type-1"/>
                </li>
                <li className="checkbox-list__item">
                  <label htmlFor="type-2">Электрогитары</label>
                  <input type="checkbox" name="type" id="type-2"/>
                </li>
                <li className="checkbox-list__item">
                  <label htmlFor="type-3">Укулеле</label>
                  <input type="checkbox" name="type" id="type-3"/>
                </li>
              </ul>
            </div>
            <div className="filter__item">
              <h3>Количество струн</h3>
                <ul className="checkbox-list">
                  <li className="checkbox-list__item">
                    <label htmlFor="strings-1">4</label>
                    <input type="checkbox" name="type" id="strings-1"/>
                  </li>
                  <li className="checkbox-list__item">
                    <label htmlFor="strings-2">6</label>
                    <input type="checkbox" name="type" id="strings-2"/>
                  </li>
                  <li className="checkbox-list__item">
                    <label htmlFor="strings-3">7</label>
                    <input type="checkbox" name="type" id="strings-3"/>
                  </li>
                  <li className="checkbox-list__item">
                    <label htmlFor="strings-4">12</label>
                    <input type="checkbox" name="type" id="strings-4"/>
                  </li>
              </ul>
            </div>
            <button className="filter__button">Показать</button>
          </section>
          <section className="main__catalog catalog">
            <h2 className="visually-hidden">Список товаров</h2>
            <div className="catalog__sort sort">
              <div className="sort__wrapper">
                <span>Сортировать:</span>
                <button className="sort__feature">по цене</button>
                <button className="sort__feature">по популярности</button>
              </div>
              <div className="sort__directions">
                <button className="sort__button sort__button--up">По возрастанию</button>
                <button className="sort__button sort__button--down">По убыванию</button>
              </div>
            </div>
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
        </div>
      </div>
    </main>
  );
}
