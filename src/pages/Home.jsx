import React from "react";
import axios from "axios";

import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

function Home({ onAddToCart, onRemoveFromCart, cartItems, url }) {
  const [cards, setCards] = React.useState([]);
  const [isHomeLoaded, setIsHomeLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getHomeInfo() {
      const homeResp = await axios.get(`${url}/cards`);
      setCards(homeResp.data);
      setIsHomeLoaded(true);
    }
    getHomeInfo();
  }, []);
  return isHomeLoaded ? (
    <>
      {console.log("Home renderrred")}
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
  ) : (
    <h1>Loading</h1>
  );
}
export default Home;
