import React from "react";
import sortCards from "../../functions/Sort";

function SortBy({ setData, url }) {
  const sortArr = [
    { id: 0, value: "имени" },
    { id: 1, value: "цене Up" },
    { id: 2, value: "цене Down" },
    { id: 3, value: "типу" },
  ];
  const [sortOpened, setSortOpened] = React.useState(false);
  const [sortValue, setSortValue] = React.useState(sortArr[0]);

  const onChangeSortValue = (obj) => {
    if (obj) {
      setSortValue(obj);
      sortCards(url, obj.id).then((res) => {
        setData(res);
      });
    }
    setSortOpened(!sortOpened);
  };

  return (
    <div className="sort-list">
      <h6>Сортировать по:</h6>
      <span onClick={() => onChangeSortValue()}>{sortValue.value}</span>
      <ul className={sortOpened ? "choosed" : ""}>
        {sortArr.map((item) => (
          <li
            onClick={() => onChangeSortValue(item)}
            className={item.id === sortValue.id ? "active" : ""}
            key={item.id}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SortBy;
