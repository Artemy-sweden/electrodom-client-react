import React from "react";
import { NavLink, Link } from "react-router-dom";

function Card({ card, onAddProduct, onRemoveProduct, status = false }) {
  const [isItemAdded, setIsItemAdded] = React.useState(status);

  const onClickButton = () => {
    isItemAdded ? onRemoveProduct(card) : onAddProduct(card);
    setIsItemAdded(!isItemAdded);
  };

  return (
    <div className="card">
      <div className="card__offer">sale</div>

      <div className="card__photo">
        <img src="../assets/img/люстра 2.png" alt="#" />
      </div>
      <Link to={`/catalog/${card.category}/${card.name}/${card.id}`}>
        <div className="card__price">
          <span>{card.price + " BYN"}</span>
          <p>999 р.</p>
        </div>

        <h6 className="card__title">{card.name}</h6>
      </Link>
      <p className="card__description">{card.description}</p>
      <div className="card__rating">Stars...</div>
      <div className="order-btn" onClick={() => onClickButton()}>
        <button>{isItemAdded ? "Remove" : "Add"}</button>
      </div>
    </div>
  );
}

export default Card;
