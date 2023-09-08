function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <div className="error__text">
        <p>Упс, кажется, что-то пошло не так</p>
        <p>Проверьте правильность введённого адреса или страницы</p>
        <p>Увы, интересующая вас страница не существует;(</p>
      </div>
    </div>
  );
}

export default NotFound;
