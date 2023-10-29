import axios from "axios";

function addCards({ setCartItems, obj, url }) {
  axios.post(`${url}/cart`, obj);
  setCartItems((prev) => [...prev, obj]);
  console.log("added successfully", obj, url);
}

export default addCards;
