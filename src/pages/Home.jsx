import React from "react";
import axios from "axios";

import Card from "../components/Card";
import SearchBox from "../components/SearchBox/SearchBox";

function Home({ onAddToCart, onRemoveFromCart, cartItems }) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // async function getData() {
    //   const cardsResp = await axios.get("http://localhost:3001/cards");
    //   setItems(cardsResp.data.results);
    // }
    // getData();
    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((json) => setCards(json))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h4>Главная</h4>
      <SearchBox />
      Filters
      <div className="items">
        {cards.map((card) => (
          <Card
            card={card}
            onAddToCart={(obj) => onAddToCart(obj)}
            onRemoveFromCart={(obj) => onRemoveFromCart(obj)}
            status={cartItems.find(
              (item) => Number(item.id) === Number(card.id)
            )}
            key={card.id}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
