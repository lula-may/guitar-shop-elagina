import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-header__nav main-nav">
        <div className="main-nav__wrapper">
          <div className="main-nav__logo logo">
            <Link to="#" className="logo__link">
              <img src="img/logo-black.png" width="67" height="70" alt="Логотип Guitar Shop" />
            </Link>
          </div>
          <ul className="main-nav__site site-nav">
            <li className="site-nav__item">
              <Link className="site-nav__link" to="#">Каталог</Link>
            </li>
            <li className="site-nav__item">
              <Link className="site-nav__link" to="#">Где купить?</Link>
            </li>
            <li className="site-nav__item">
              <Link className="site-nav__link" to="#">О компании</Link>
            </li>
            <li className="site-nav__item">
              <Link className="site-nav__link" to="#">Cервис-центры</Link>
            </li>
          </ul>
          <ul className="main-nav__user user-nav">
            <li className="user-nav__item">
              <Link to="#" className="user-nav__link" aria-label="Карта">
                <svg class="user-nav__icon" width="14" height="17">
                  <use xlinkHref="#map"/>
                </svg>
              </Link>
            </li>
            <li className="user-nav__item">
              <Link to="#" className="user-nav__link" aria-label="Поиск">
                <svg class="user-nav__icon" width="14" height="14">
                  <use xlinkHref="#search"/>
                </svg>
              </Link>
            </li>
            <li className="user-nav__item">
              <Link to="#" className="user-nav__link" aria-label="Корзина">
                <svg class="user-nav__icon" width="16" height="18">
                  <use xlinkHref="#basket"/>
                </svg>
                <span className="user-nav__counter">2</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-header__image">
        <div className="main-header__container">
          <img src="img/guitar-header.png" width="878" height="282" alt="Электрогитара" />
        </div>
      </div>
    </header>
  );
}
