import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import Filters from "../components/Filters/Filters";
import SearchBox from "../components/SearchBox";

function Catalog({ onAddToCart, onRemoveFromCart, cartItems, url }) {
  const { category } = useParams();
  const [catalog, setCatalog] = React.useState([]);
  const [isCatalogLoaded, setIsCatalogLoaded] = React.useState(false);
  React.useEffect(() => {
    async function getCatalog() {
      const categoriesResp = await axios.get(
        `${url}/cards?category=${category}`
      );
      setCatalog(categoriesResp.data);
      setIsCatalogLoaded(true);
    }
    getCatalog();
  }, []);

  return isCatalogLoaded ? (
    <>
      {console.log("Catalog renderrred")}
      <h4>{category}</h4>
      <SearchBox />
      Filters
      <div className="items">
        {catalog.map((card) => (
          <Card
            card={card}
            onAddToCart={(item) => onAddToCart(item)}
            onRemoveFromCart={(item) => onRemoveFromCart(item)}
            status={cartItems.find(
              (item) => Number(item.id) === Number(card.id)
            )}
            key={card.id}
          />
        ))}
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}
export default Catalog;
