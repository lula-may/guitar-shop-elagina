import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import Sort from '../sort/sort';
export default function Catalog() {
  return (
    <section className="main__catalog catalog">
      <h2 className="visually-hidden">Список товаров</h2>
      <Sort/>
      <ul className="catalog__list">
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/electro.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '70%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/classic.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '70%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/ukulele.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '70%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/electro.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '70%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/classic.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '90%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/ukulele.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '100%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/electro.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '70%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/classic.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '90%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
        <li className="catalog__item">
          <article className="card">
            <h3 className="visually-hidden">Карточка товара</h3>
            <div className="card__image"><img src="img/ukulele.png" width="68" height="190" alt="Фото гитары" /></div>
            <div className="card__reviews">
              <div className="rating">
                <span className="rating__active" style={{width: '100%'}}></span>
              </div>
              <span className="card__reviews-count">15</span>
            </div>
            <dl className="card__info">
              <dt>Честер Bass</dt>
              <dd>17 500 ₽</dd>
            </dl>
            <div className="card__footer">
              <Link className="card__button button button--plain" to="#">Подробнее</Link>
              <button className="card__button card__button--cart button button--bright" type="button">Купить</button>
            </div>
          </article>
        </li>
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
