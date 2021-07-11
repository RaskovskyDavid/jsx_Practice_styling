import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/100";
ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img alt="img" src={img} />
      <img
        alt="pizza"
        className="food-img"
        src="https://vinomanos.com/wp-content/uploads/2020/08/MG_315.jpg"
      />
      <img
        alt="locro"
        className="food-img"
        src="https://img-global.cpcdn.com/recipes/recipes_7274_v1393322622_foto_foto_00030195/751x532cq70/locro-criollo-argentino-foto-principal.jpg"
      />
      <img
        alt="milanesa sandwich"
        className="food-img"
        src="https://www.elancasti.com.ar/u/fotografias/m/2018/3/18/f1280x720-131298_262973_5050.jpg"
      />
    </div>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
