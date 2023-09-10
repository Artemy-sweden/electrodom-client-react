import React from "react";
import { NavLink, Link } from "react-router-dom";

import SearchBox from "../components/SearchBox";

function CatalogCategories({ categories }) {
  console.log("categories renderrrrrraqd");

  return (
    <>
      <h4>Каталог</h4>
      <SearchBox />
      <div className="categories">
        {categories.map((obj, index) => (
          <NavLink
            to={`/catalog/${obj.category_name}`}
            className="categories__item"
            key={index}
          >
            <img src="../assets/img/люстра 2.png" alt="" />
            <p>{obj.category_name}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
}
export default CatalogCategories;
