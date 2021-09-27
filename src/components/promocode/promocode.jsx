import React from "react";
import "./style.scss"

export default function Promocode() {
  return (
    <div className="cart__promocode promocode">
      <h3>Промокод на скидку</h3>
      <form action="" method="post">
        <label htmlFor="promo">Введите свой промокод, если он у вас есть.</label>
        <div className="promocode__wrapper">
          <input type="text" name="promo" id="promo" value="GITARAHIT"/>
          <button className="promocode__button button button--plain" type="submit">Применить купон</button>
        </div>
      </form>
    </div>
  );
}
