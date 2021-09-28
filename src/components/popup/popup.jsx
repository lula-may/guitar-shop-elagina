import React from "react";
import "./style.scss";

const renderModal = (type) => {
  switch (type) {
    case 'add':
      return (
        <section className="modal modal--add">
          <h2>Добавить товар в корзину</h2>
          <div className="modal__wrapper modal__wrapper--product">
            <div className="product-info">
              <div className="product-info__image">
                <img src="img/ukulele-small.png" width="48" height="124" alt="Фото гитары " />
              </div>
              <div className="product-info__description">
                <h3>Гитара Честер bass</h3>
                <p>Артикул: SO757575</p>
                <p>Электрогитара, 6 струнная</p>
                <b>Цена: 17 500 ₽</b>
              </div>
            </div>
            <button className="modal__button button button--bright" type="button">Добавить в корзину</button>
          </div>
          <button className="modal__close" type="button" aria-label="Закрыть"></button>
        </section>
      );
    case 'delete':
      return (
        <section className="modal modal--delete">
          <h2>Удалить этот товар?</h2>
          <div className="modal__wrapper modal__wrapper--product">
            <div className="product-info">
              <div className="product-info__image">
                <img src="img/electro.png" width="48" height="124" alt="Фото гитары " />
              </div>
              <div className="product-info__description">
                <h3>Гитара Честер bass</h3>
                <p>Артикул: SO757575</p>
                <p>Электрогитара, 6 струнная</p>
                <b>Цена: 17 500 ₽</b>
              </div>
            </div>
            <div className="modal__column">
              <button className="modal__button button button--bright" type="button">Удалить товар</button>
              <button className="modal__button button button--transparent" type="button">Продолжить покупки</button>
            </div>
          </div>
          <button className="modal__close" type="button" aria-label="Закрыть"></button>
        </section>
      );
    case 'success':
      return (
        <section className="modal modal--success">
          <h2>Товар успешно добавлен в корзину</h2>
          <div className="modal__wrapper modal__wrapper--success">
            <button className="modal__button button button--bright" type="button">Перейти в корзину</button>
            <button className="modal__button button button--transparent" type="button">Продолжить покупки</button>
          </div>
          <button className="modal__close" type="button" aria-label="Закрыть"></button>
        </section>
      );
    default: return null;
    }
}

export default function Popup() {
  return (
    <div className="overlay">
      {renderModal('delete')}
    </div>
  );
}
