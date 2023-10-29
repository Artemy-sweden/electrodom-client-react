function LoginPage() {
  const userStatus = true;
  return userStatus ? (
    <div class="authentification__container">
      <h4>Авторизация</h4>
      <form action="" method="post">
        <input type="text" id="login" size="40" placeholder="Логин" />
        <input type="password" id="password" size="40" placeholder="Пароль" />
        <button type="submit" value="Войти">
          Войти
        </button>
        <div class="parametrs">
          <a href="#">Забыли пароль?</a>
          <a href="#">Регистрация</a>
        </div>
      </form>
    </div>
  ) : (
    <div class="registration__container">
      <h4>Регистрация</h4>
      <form action="" method="post">
        <div class="input__data">
          <input type="text" id="login" size="40" placeholder="Логин" />
          <input type="email" id="email" size="40" placeholder="E-mail" />
          <input type="password" id="password" size="40" placeholder="Пароль" />
          <input
            type="password"
            id="require__password"
            size="40"
            placeholder="Повторите пароль"
          />
        </div>
        <div class="input__radio">
          <p>Я согласен(-на)</p>
          <div class="condition">
            <input type="checkbox" id="radio_one" class="radio" />
            <label for="one">
              с пользовательским соглашением на получение e-mail пассылки
            </label>
          </div>
          <div class="condition">
            <input type="checkbox" id="radio_two" class="radio" />
            <label for="two">на обработку персональных данных</label>
          </div>
        </div>
        <button type="submit" value="Войти">
          Регистрация
        </button>
        <div class="already__have__account">
          <p>Уже есть аккаунт?</p>
          <a href="#">Войти</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
