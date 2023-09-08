import React from "react";

import Card from "../components/Card";

function Cart({ cartItems, onAddToCart, onRemoveFromCart }) {
  return (
    <>
      {console.log("Cart renderrred")}
      <h4>Корзина</h4>
      <div className="items">
        {cartItems.map((card) => (
          <Card
            card={card}
            onAddToCart={(item) => onAddToCart(item)}
            onRemoveFromCart={(item) => onRemoveFromCart(item)}
            status={true}
            key={card.id}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
