import React from "react";
import "./style.scss";

export default function Sort() {
  return (
    <div className="catalog__sort sort">
      <div className="sort__wrapper">
        <span className="sort__label">Сортировать:</span>
        <div className="sort__types">
          <button className="sort__feature sort__feature--active" id="sort-price">по цене</button>
          <button className="sort__feature" id="sort-popular">по популярности</button>
        </div>
        <div className="sort__directions">
          <button id="sort-up" className="sort__button sort__button--active" aria-label="По возрастанию">
            <svg class="sort__icon" width="14" height="11">
              <use xlinkHref="#sort-up"></use>
            </svg>
          </button>
          <button id="sort-down" className="sort__button" aria-label="По убыванию">
            <svg class="sort__icon" width="14" height="11">
              <use xlinkHref="#sort-down"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
