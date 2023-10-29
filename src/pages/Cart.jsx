import React from "react";

import Card from "../components/Card";

function Cart({ cartItems, onAddProduct, onRemoveProduct }) {
  return (
    <>
      {console.log("Cart renderrred")}
      <h4>Корзина</h4>
      <div className="items">
        {cartItems.map((card) => (
          <Card
            card={card}
            onAddProduct={(item) => onAddProduct(item)}
            onRemoveProduct={(item) => onRemoveProduct(item)}
            status={true}
            key={card.id}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
