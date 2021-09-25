import React from "react";
import {BrowserRouter, Link} from "react-router-dom";

import Header from "../header/header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="page__main main">
        <h1>Каталог гитар</h1>
        <ul className="main__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item"><Link to="#" className="breadcrumbs__link">Главная</Link></li>
          <li className="breadcrumbs__item"><Link to="#" className="breadcrumbs__link">Каталог</Link></li>
        </ul>
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
      </main>
      <footer className="main-footer">
        <div className="main-footer__left-column">
          <div className="main-footer__logo logo">
            <Link to="#" className="logo__link">
              <img src="img/logo-white.png" width="67" height="70" alt="Логотип Guitar Shop" />
            </Link>
          </div>
          <ul className="main-footer__social social">
            <li className="social__item">
              <Link className="social__link social__link--fb" to="#">Мы в Фейсбук</Link>
            </li>
            <li className="social__item">
              <Link className="social__link social__link--insta" to="#">Мы в Инстаграм</Link>
            </li>
            <li className="social__item">
              <Link className="social__link social__link--twitter" to="#">Мы в Твиттере</Link>
            </li>
          </ul>
        </div>
        <div className="main-footer__navigation">
          <div className="main-footer__item">
            <h4>О нас</h4>
            <p>Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
            <p>Все инструменты проверены, отстроены и доведены до идеала!</p>
          </div>
          <div className="main-footer__item">
            <h4>Каталог</h4>
            <ul className="main-footer__list">
              <li><Link to="">Акустические гитары</Link></li>
              <li><Link to="">Классические гитары</Link></li>
              <li><Link to="">Электрогитары</Link></li>
              <li><Link to="">Бас-гитары</Link></li>
              <li><Link to="">Укулеле</Link></li>
            </ul>
          </div>
          <div className="main-footer__item">
            <h4>Информация</h4>
            <ul className="main-footer__list">
              <li><Link to="">Где купить?</Link></li>
              <li><Link to="">Блог</Link></li>
              <li><Link to="">Вопрос - ответ</Link></li>
              <li><Link to="">Возврат</Link></li>
              <li><Link to="">Сервис-центры</Link></li>
            </ul>
          </div>
          <div className="main-footer__item main-footer__item--contacts">
            <h4>Контакты</h4>
            <address>г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</address>
            <a href="tel:+7-812-500-50-50">8-812-500-50-50</a>
            <p>Режим работы:</p>
            <p>с 11:00 до 20:00, без выходных.</p>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
