import axios from "axios";

function sortType(t) {
  switch (t) {
    case 0:
      return "name&_order=desc";
    case 1:
      return "price&_order=desc";
    case 2:
      return "price&_order=asc";
    case 3:
      return "category&_order=desc";
  }
}

async function sortCards(url, type) {
  console.log(url);
  try {
    const sortResp = await axios.get(`${url}_sort=${sortType(type)}`);
    //http://localhost:3001/cards?category=category_2&
    return sortResp.data;
    //setData(sortResp.data);
  } catch (err) {
    console.warn(err);
  }
}

export default sortCards;
