import axios from "axios";

async function searchCards(setData, url, searchVal) {
  try {
    const searchResp = await axios.get(
      url + (searchVal ? "&q=" + searchVal : "/")
    );
    setData(searchResp.data);
  } catch (err) {
    console.warn(err);
  }
}

export default searchCards;
