import { NavLink, Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`catalog/${item.category.category_name}/${item.name}/${item.id}`}>
      <div className="card">
        <div className="card__offer">sale</div>
        <div className="card__photo">
          <img src="../assets/img/люстра 2.png" alt="#" />
        </div>
        <div className="card__price">
          <span>{item.price + " BYN"}</span>
          <p>999 р.</p>
        </div>
        <h6 className="card__title">{item.name}</h6>
        <p className="card__description">{item.description}</p>
        <div className="card__rating">Stars...</div>
        <div className="order-btn">
          <button>Add to cart</button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
