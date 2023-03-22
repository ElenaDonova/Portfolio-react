import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Nav__container">
        <div className="Nav__links">
          <img src="./img/logo.png" alt="Logo name" className="Nav__logo" />
          <ul className="Nav__list">
            <li className="Nav__list-item">Главная</li>
            <li className="Nav__list-item">Студия</li>
            <li className="Nav__list-item">Наши работы</li>
            <li className="Nav__list-item">Контакты</li>
          </ul>
        </div>
        <div className="Nav__icons">
          <img src="./img/search.png" alt="" className="Nav__icon" />
          <button className="Nav__button">Связаться с нами</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
