import React from "react";
import "./Works.css";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import { useState } from "react";

const data = [
  "Веб-дизайн",
  "Разработка",
  "Иллюстрация",
  "Дизайн продукта",
  "Социальные медиа",
];

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div className="Works">
      <div className="Works__container">
        <div className="Works__left">
          <ul className="Works__list">
            {data.map((item) => (
              <li
                key={item}
                onClick={() => setWork(item)}
                className="Works__list-items"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="Works__right">
          {work === "Веб-дизайн" ? (
            <WebDesign />
          ) : work === "Разработка" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
