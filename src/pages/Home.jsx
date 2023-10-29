import React from "react";

import Card from "../components/Card";
import SearchBox from "../components/Search";
import SortBy from "../components/SortBy";

import addCards from "../functions/Add";
import removeCards from "../functions/Remove";
// import sortCards from "../functions/Sort";
// import filterCards from "../functions/Filter";
import searchCards from "../functions/Search";
import sortCards from "../functions/Sort";

function Home({ cards, setCards, cartItems, setCartItems, isLoading, url }) {
  console.log(cards);
  const [inputValue, setInputValue] = React.useState("");
  const onChangeInputValue = (event) => {
    const srchVal = event.target.value;
    setInputValue(srchVal);
    searchCards(setCards, url + "/cards?_sort=name", srchVal);
  };
  return (
    <>
      <h4>Главная</h4>
      <div className="search-panel">
        <SearchBox
          onChangeInputValue={onChangeInputValue}
          inputValue={inputValue}
        />
        <SortBy setData={setCards} url={url + "/cards?"} />
      </div>
      Filters
      <div className="items">
        {isLoading ? (
          <h1>LOADING...</h1>
        ) : (
          cards.map((card) => (
            <Card
              card={card}
              onAddProduct={(obj) => addCards({ setCartItems, obj, url })}
              onRemoveProduct={(obj) => removeCards({ setCartItems, obj, url })}
              status={cartItems.some((elem) => elem.id == card.id)}
              key={card.id}
            />
          ))
        )}
      </div>
    </>
  );
}
export default Home;
