function Catalog() {
  return (
    <div className="wrapper">
      <h4>Каталог</h4>
      <div className="search-box">
        <input type="text" placeholder="давай ищи..." />
      </div>
      <div className="filters">
        <label className="checkbox">
          <input type="checkbox" />
          <p>под наркозом?</p>
        </label>
        <div className="input">
          <p>Цена</p>
          <input type="text" placeholder="от 1000" />
          <input type="text" placeholder="до 10000000" />
        </div>
        <div className="list">
          <p>цвет</p>
          <select name="name" id="id">
            <option value="красный">красный</option>
            <option value="желтый">желтый</option>
            <option value="синий">синий</option>
          </select>
        </div>
        <button>еще?</button>
      </div>
      <div className="items">cards...</div>
    </div>
  );
}
export default Catalog;
