import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__wrapper">
        <div className="main-footer__container">
          <div className="main-footer__logo logo">
            <Link to="#" className="logo__link">
              <img src="img/logo-white.png" srcSet="img/logo-white@2x.png 2x" width="67" height="70" alt="Логотип Guitar Shop" />
            </Link>
          </div>
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
            <address>г. Санкт-Петербург,<br/> м. Невский проспект,<br/> ул. Казанская 6.</address>
            <a href="tel:+7-812-500-50-50">8-812-500-50-50</a>
            <p>Режим работы:</p>
            <span>с 11:00 до 20:00,</span> без выходных.
          </div>
          <div className="main-footer__social">
            <ul className="social">
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
        </div>
      </div>
    </footer>
  );
}
