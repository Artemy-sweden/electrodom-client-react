import React from "react";
import axios from "axios";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Catalog() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const cardsResp = await axios.get("http://194.62.19.226:8080/goods");
      setItems(cardsResp.data.results);
    }
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <h4>Люстры?</h4>
        <div className="search-box">
          <input type="text" placeholder="давай ищи..." />
        </div>
        Filters
        <div className="items">
          {items.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Catalog;
