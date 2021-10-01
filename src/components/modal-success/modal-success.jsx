import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function ModalSuccess({onPopupClose}) {
  return (
    <section className="modal modal--success">
      <h2>Товар успешно добавлен в корзину</h2>
      <div className="modal__wrapper modal__wrapper--success">
        <button className="modal__button button button--bright" type="button">Перейти в корзину</button>
        <button className="modal__button button button--transparent" type="button">Продолжить покупки</button>
      </div>
      <button
        className="modal__close"
        onClick={onPopupClose}
        type="button"
        aria-label="Закрыть"
      />
    </section>
  );
}
ModalSuccess.propTypes = {
  onPopupClose: PropTypes.func.isRequired,
};
