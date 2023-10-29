import axios from "axios";

function removeCards({ setCartItems, obj, url }) {
  axios.delete(`${url}/cart/${obj.id}`);
  setCartItems((prev) =>
    prev.filter((item) => Number(item.id) !== Number(obj.id))
  );
}

export default removeCards;
