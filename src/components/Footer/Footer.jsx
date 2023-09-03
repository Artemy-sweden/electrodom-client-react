import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__section">
          <h4>
            <Link to="/">Магазин</Link>
          </h4>
          <ul>
            <li>г. Любань, ул. Интернациональная, 1 (магазин “Сезам”)</li>
            <li>время работы: пн-пят с 9.00-18.00.</li>
          </ul>
          <ul className="tel">
            <li>
              <a href="tel:+37529123-45-67">+375 (33) 123-45-67</a>
            </li>
            <li>
              <a href="tel:+37533999-00-34">+375 (17) 999-00-34</a>
            </li>
          </ul>
          <div className="socials">
            <img src="../assets/img/inst.png" alt="" />
            <img src="../assets/img/inst.png" alt="" />
            <img src="../assets/img/inst.png" alt="" />
          </div>
        </div>
        <div className="footer__section">
          <h4>
            <Link to="/catalog">Каталог</Link>
          </h4>
          <ul>
            <li>
              <a href="#">все товары</a>
            </li>
            <li>
              <a href="#">скидки и акции</a>
            </li>
            <li>
              <a href="#">люстры</a>
            </li>
            <li>
              <a href="#">бра</a>
            </li>
            <li>
              <a href="#">лампы</a>
            </li>
            <li>
              <a href="#">свечи</a>
            </li>
            <li>
              <a href="#">на улицу</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>
            <a href="#">Покупки</a>
          </h4>
          <ul>
            <li>
              <a href="#">как купить</a>
            </li>
            <li>
              <a href="#">гарантия</a>
            </li>
            <li>
              <a href="#">доставка</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>
            <a href="#">О нас</a>
          </h4>
          <ul>
            <li>
              <a href="#">о магазине</a>
            </li>
            <li>
              <a href="#">вопрос-ответ</a>
            </li>
            <li>
              <a href="#">правила продажу</a>
            </li>
          </ul>
        </div>
        <div className="authors">
          <p>Мы это сделали. Какие мы молодцы!</p>
          <p>2022-2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
