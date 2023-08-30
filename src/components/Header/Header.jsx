function onClickBurger() {
  if (window.innerWidth <= 551) {
    var header = document.querySelector("header");
    header.classList.toggle("active-menu");
  }
}

function Header() {
  return (
    <header>
      <div className="header__inner">
        <div className="burger" onClick={onClickBurger}></div>
        <a href="#" className="logo">
          <div className="logo__img">
            <img src="../assets/img/logo.png" alt="logo" />
          </div>
          <div className="logo__text">
            <b>ElectroDom</b>
            <p>купи наконец люстру</p>
          </div>
        </a>

        <nav>
          <ul>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Частые вопросы</a>
            </li>
          </ul>
        </nav>
        <div className="person">
          <a href="#" className="cart">
            <img src="../assets/img/shopping-cart.png" alt="cart" />
            <span>4</span>
          </a>
          <a href="#" className="account">
            <img src="../assets/img/user.png" alt="user" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
