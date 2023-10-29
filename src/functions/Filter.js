import axios from "axios";

async function filterCards(url, filterArr) {
  let filterRequest = filterArr.map((item) =>
    item.value ? item.value + "&" : ""
  );
  filterRequest.splice(filterRequest.length - 1, 1);
  console.log(filterRequest);
  // try {
  //   const filtersResp = await axios.get(`${url}/cards?filter=${filterRequest}`);
  //   setCards(filtersResp.data);
  // } catch (err) {
  //   console.warn(err);
  // }
}

export default filterCards;
