import Filters from "../components/Filters/Filters";
import SearchBox from "../components/SearchBox/SearchBox";

function Catalog() {
  return (
    <div className="wrapper">
      <h4>Каталог</h4>
      <SearchBox />
      Filters
      <div className="items">cards...</div>
    </div>
  );
}
export default Catalog;
