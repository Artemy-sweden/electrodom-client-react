import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import Filters from "../components/Filters";
import SearchBox from "../components/Search";
import SortBy from "../components/SortBy";
import addCards from "../functions/Add";
import removeCards from "../functions/Remove";
import searchCards from "../functions/Search";

function Catalog({ cartItems, setCartItems, url }) {
  console.log("catalog renderrred");
  const { category } = useParams();
  const [catalog, setCatalog] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [filtersModal, showFiltersModal] = React.useState(false);
  const [catalogSearchValue, setCatalogSearchValue] = React.useState("");
  const CATALOG_URL = url + "/cards?category=" + category;
  React.useEffect(() => {
    async function fetchCatalogData() {
      try {
        const [catalogResp, catalogFiltersResp] = await Promise.all([
          axios.get(`${CATALOG_URL}&_sort=name`),
          axios.get(`${url}/filters`),
        ]);
        setCatalog(catalogResp.data);
        setFilters(catalogFiltersResp.data);
      } catch (err) {
        console.warn(err);
      }
    }
    fetchCatalogData();
  }, []);
  const onChangeInputValue = (event) => {
    const srchval = event.target.value;
    setCatalogSearchValue(srchval);
    searchCards(setCatalog, CATALOG_URL, srchval);
  };
  return (
    <>
      <h4>{category}</h4>
      <div className="search-panel">
        <SearchBox
          onChangeInputValue={onChangeInputValue}
          inputValue={catalogSearchValue}
        />
        <SortBy setData={setCatalog} url={CATALOG_URL + "&"} />
      </div>
      <button onClick={() => showFiltersModal(!filtersModal)}>
        {filtersModal ? "hide filters" : "show filters"}
      </button>
      {filtersModal && <Filters filters={filters} catalog_url={CATALOG_URL} />}

      {/* <div className="items">{renderItems()}</div> */}
      <div className="items">
        {cartItems.length > 1 &&
          catalog.map((card) => (
            <Card
              card={card}
              onAddProduct={(obj) => addCards({ setCartItems, obj, url })}
              onRemoveProduct={(obj) => removeCards({ setCartItems, obj, url })}
              status={cartItems.some((elem) => elem.id == card.id)}
              key={card.id}
            />
          ))}
      </div>
    </>
  );
}
export default Catalog;
