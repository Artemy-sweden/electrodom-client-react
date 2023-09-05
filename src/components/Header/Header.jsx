import { NavLink, Link } from "react-router-dom";

function onClickBurger() {
  if (window.innerWidth <= 551) {
    var header = document.querySelector("header");
    header.classList.toggle("active-menu");
  }
}

function closeBurger() {
  if (window.innerWidth <= 551) {
    var header = document.querySelector("header");
    header.classList.remove("active-menu");
  }
}

function Header() {
  return (
    <header>
      <div className="header__inner">
        <div className="burger" onClick={onClickBurger}></div>
        <NavLink to="/" className="logo">
          <div className="logo__img">
            <img src="../assets/img/logo.png" alt="logo" />
          </div>
          <div className="logo__text">
            <b>ElectroDom</b>
            <p>купи наконец люстру</p>
          </div>
        </NavLink>

        <nav>
          <ul>
            <li>
              <Link to="/catalog" onClick={closeBurger}>
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeBurger}>
                О нас
              </Link>
            </li>
            <li>
              <Link to="/purchases" onClick={closeBurger}>
                Покупки
              </Link>
            </li>
          </ul>
        </nav>
        <div className="person">
          <NavLink to="/cart" className="cart">
            <img src="../assets/img/cart1.png" alt="cart" />
            <span>4</span>
          </NavLink>
          <NavLink to="/account" className="account">
            <img src="../assets/img/user2.png" alt="user" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
