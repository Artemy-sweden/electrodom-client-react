import Filters from "../components/Filters/Filters";

function Catalog() {
  return (
    <div className="wrapper">
      <h4>Каталог</h4>
      <div className="search-box">
        <input type="text" placeholder="давай ищи..." />
      </div>
      Filters
      <div className="items">cards...</div>
    </div>
  );
}
export default Catalog;
