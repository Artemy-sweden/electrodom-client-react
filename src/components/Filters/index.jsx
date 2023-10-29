import Select from "./Select";
import filterCards from "../../functions/Filter";

function Filters({ filters, catalog_url }) {
  return (
    <div className="filters">
      {filters[0].values.map((item) => (
        <Select item={item} />
      ))}

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
      <button onClick={filterCards(filters, catalog_url)}>Поиск?</button>
    </div>
  );
}
export default Filters;
