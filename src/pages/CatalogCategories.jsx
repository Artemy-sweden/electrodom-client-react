import React from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";

import SearchBox from "../components/SearchBox/SearchBox";

function Categories() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    async function getCategories() {
      const resp = await axios.get("http://194.62.19.226:8080/categories");
      setCategories(resp.data.results);
    }
    getCategories();
  }, []);
  return (
    <div className="wrapper">
      {console.log(categories)}
      <h4>Каталог</h4>
      <SearchBox />
      <div className="categories">
        {categories.map((obj) => (
          <NavLink
            to={`/catalog/${obj.category_name}`}
            className="categories__item"
            key={obj.id}
          >
            <img src="../assets/img/люстра 2.png" alt="" />
            <p>{obj.category_name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default Categories;
