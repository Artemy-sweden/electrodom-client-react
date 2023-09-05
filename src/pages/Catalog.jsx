import { useParams } from "react-router-dom";

import Filters from "../components/Filters/Filters";
import SearchBox from "../components/SearchBox/SearchBox";

function Catalog() {
  const { category } = useParams();
  return (
    <div className="wrapper">
      <h4>{category}</h4>
      <SearchBox />
      Filters
      <div className="items">cards...</div>
    </div>
  );
}
export default Catalog;
