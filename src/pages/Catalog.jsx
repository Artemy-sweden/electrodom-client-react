import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import Filters from "../components/Filters/Filters";
import SearchBox from "../components/SearchBox";

function Catalog({ onAddToCart, onRemoveFromCart, cartItems, url }) {
  const { category } = useParams();
  const [catalog, setCatalog] = React.useState([]);
  const [isCatalogLoading, setIsCatalogLoading] = React.useState(true);
  const [catalogSearchValue, setCatalogSearchValue] = React.useState("");
  const preloadArray = [
    { category_name: "category_1" },
    { category_name: "category_2" },
    { category_name: "category_3" },
  ];

  React.useEffect(() => {
    async function fetchCatalogData() {
      const catalogResp = await axios.get(`${url}/cards?category=${category}`);
      setCatalog(catalogResp.data);
      setIsCatalogLoading(false);
    }
    fetchCatalogData();
  }, []);

  const onChangeInputValue = (event) => {
    setCatalogSearchValue(event.target.value);
  };

  const renderItems = () => {
    const filtredItems = catalog.filter((item) =>
      item.name.toLowerCase().includes(catalogSearchValue.toLowerCase())
    );
    console.log("filtering...");
    return (isCatalogLoading ? preloadArray : filtredItems).map((card) => (
      <Card
        card={card}
        onAddToCart={(item) => onAddToCart(item)}
        onRemoveFromCart={(item) => onRemoveFromCart(item)}
        status={cartItems.find((item) => Number(item.id) === Number(card.id))}
        key={card.id}
      />
    ));
  };

  return (
    <>
      {console.log("Catalog renderrred")}
      <h4>{category}</h4>
      <SearchBox
        onChangeInputValue={onChangeInputValue}
        catalogSearchValue={catalogSearchValue}
      />
      Filters
      <div className="items">{renderItems()}</div>
      {/* <div className="items">
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
      </div> */}
    </>
  );
}
export default Catalog;
