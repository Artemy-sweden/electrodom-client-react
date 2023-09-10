import React from "react";
import axios from "axios";

import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

function Home({ onAddToCart, onRemoveFromCart, cards, isLoading }) {
  const [inputValue, setInputValue] = React.useState("");
  const preloadArray = [
    {
      id: 0,
      name: "Title_1",
      provider: "provider",
      category: "categ",
      price: 0.01,
      count: 1,
      image: "url",
      rating: 1.0,
      description: "some text...",
      discount: {
        status: true,
        value: "50%",
      },
    },
  ];

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const renderItems = () => {
    const filtredItems = cards.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log("filtering...");
    return (isLoading ? preloadArray : filtredItems).map((card) => (
      //status={cartItems.find((item) => Number(item.id) === Number(card.id))}
      <Card
        card={card}
        onAddToCart={(obj) => onAddToCart(obj)}
        onRemoveFromCart={(obj) => onRemoveFromCart(obj)}
        key={card.id}
      />
    ));
  };
  return (
    <>
      {console.log("Home renderrred")}
      <h4>Главная</h4>
      <SearchBox
        onChangeInputValue={onChangeInputValue}
        inputValue={inputValue}
      />
      Filters
      <div className="items">{renderItems()}</div>
      {/* <div className="items">
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
      </div> */}
    </>
  );
}
export default Home;
