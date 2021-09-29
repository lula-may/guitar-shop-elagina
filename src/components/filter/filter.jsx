import React from 'react';
import './style.scss';

export default function Filter() {
  return (
    <section className="main__filter filter">
      <h2>Фильтр</h2>
      <div className="filter__item">
        <h3>Цена, ₽</h3>
        <div className="filter__price price-range">
          <div className="price-range__field">
            <input id="price-min" type="text" value="1 000" />
            <label className="visually-hidden" htmlFor="price-min">Минимальная цена</label>
          </div>
          <div className="price-range__dash"/>
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
            <input className="visually-hidden" type="checkbox" name="type" id="type-1"/>
            <label htmlFor="type-1">Акустические гитары</label>
          </li>
          <li className="checkbox-list__item">
            <input className="visually-hidden" type="checkbox" name="type" id="type-2"/>
            <label htmlFor="type-2">Электрогитары</label>
          </li>
          <li className="checkbox-list__item">
            <input className="visually-hidden" type="checkbox" name="type" id="type-3"/>
            <label htmlFor="type-3">Укулеле</label>
          </li>
        </ul>
      </div>
      <div className="filter__item">
        <h3>Количество струн</h3>
        <ul className="checkbox-list">
          <li className="checkbox-list__item">
            <input className="visually-hidden" type="checkbox" name="type" id="strings-1"/>
            <label htmlFor="strings-1">4</label>
          </li>
          <li className="checkbox-list__item">
            <input className="visually-hidden" type="checkbox" name="type" id="strings-2"/>
            <label htmlFor="strings-2">6</label>
          </li>
          <li className="checkbox-list__item">
            <input className="visually-hidden" type="checkbox" name="type" id="strings-3"/>
            <label htmlFor="strings-3">7</label>
          </li>
          <li className="checkbox-list__item">
            <input className="visually-hidden" type="checkbox" name="type" id="strings-4" disabled/>
            <label htmlFor="strings-4">12</label>
          </li>
        </ul>
      </div>
      <button className="filter__button button button--plain">Показать</button>
    </section>
  );
}
