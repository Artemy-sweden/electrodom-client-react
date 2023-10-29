import Card from "../components/Card";

function Account({ cartItems, onAddProduct, onRemoveProduct }) {
  return (
    <div class="account__wrapper">
      <h4>Личный кабинет</h4>
      <div class="main__wripper">
        <div class="personal__data__wrapper">
          <h2>Личные данные</h2>
          <div class="personal__data__container">
            <div class="personal__photo"></div>
            <div class="personal__data_description">
              <p>Какой-то ноунейм</p>
              <p>Логин: чебурек</p>
              <p>Пароль: **********</p>
              <p>Не звонить по +375291234567</p>
            </div>
          </div>
        </div>
        <div class="account_card">
          <h2>Корзина</h2>
          <div class="acc__card__block">
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
            <button class="not__send">Смотреть всё</button>
          </div>
        </div>
        <div class="history__wrapper">
          <h2>История заказов</h2>
          <div class="history__block">
            <div class="history__container">
              <div class="history__item">1</div>
              <div class="history__item">2</div>
              <div class="history__item">3</div>
              <div class="history__item">4</div>
            </div>
            <button class="not__send">Смотреть всё</button>
          </div>
        </div>

        <button class="not__send">Назад</button>
      </div>
    </div>
  );
}

export default Account;

//FEEDBACK

{
  /* <div class="account__feedback">
        <h4>Обратная связь</h4>
        <div class="feedback__block">
        <label for="name">Введите ваше имя или логин:</label>
        <input type="name" id="name" size="50" required>
        <label for="email" id="zvezda">Введите ваш email:</label>
        <input type="email" id="email" size="50" required>
        <label for="message" id="zvezda">Сообщение: </label>
        <textarea name="message" id="message" cols="150" rows="30"></textarea>
        <button сlass="send">Отправить</button>
        <p class="determine__star"> обязательно к заполнению</p>
    </div> */
}
