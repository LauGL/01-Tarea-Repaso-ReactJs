import React from "react";
import { NavBar } from "./NavBar";

export default function MenuItem({ dataMenu, colorItem }) {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {dataMenu.map((item) => (
          //si no hay id: (item, index)
          //o desectructurar (id, name)
          <li className="nav-item" key={item.id}>
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{ color: colorItem }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

//Cuando no se pasa ningún valor en MenuItem, por defecto carga defaultProps:
MenuItem.defaultProps = {
  dataMenu: [
    {
      id: 1,
      name: "Promociones",
      link: "/promo",
      active: true,
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
      active: false,
    },
  ],
};
