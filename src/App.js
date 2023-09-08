import React from "react";
import axios from "axios";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Purchases from "./pages/Purchases";
import CatalogCategories from "./pages/CatalogCategories";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

//const url = "http://localhost:3001";
const url = "https://63fe15b61626c165a0a7034c.mockapi.io";

const mass = [
  {
    id: 1,
    name: '"Весенний Париж"',
    provider_id: 2,
    category: {
      id: 1,
      category_name: "Люстры",
    },
    price: "145.50",
    count: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    characteristics: [
      {
        characteristic: {
          id: 1,
          name: "Люмы",
        },
        value: "150",
      },
      {
        characteristic: {
          id: 2,
          name: "RGB-подсветка",
        },
        value: "Отсутствует",
      },
      {
        characteristic: {
          id: 3,
          name: "Энергопотребление",
        },
        value: "Низкое, 30Вт",
      },
      {
        characteristic: {
          id: 7,
          name: "Вес",
        },
        value: "1 кг",
      },
    ],
  },
  {
    id: 2,
    name: "Ретро лампа Edison Bulb 3840-S",
    provider_id: 3,
    category: {
      id: 5,
      category_name: "Лампа",
    },
    price: "16.00",
    count: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    characteristics: [
      {
        characteristic: {
          id: 5,
          name: "Тип крепления",
        },
        value: "Ретро",
      },
      {
        characteristic: {
          id: 3,
          name: "Энергопотребление",
        },
        value: "Слабое",
      },
    ],
  },
  {
    id: 3,
    name: "ПОТОЛОЧНАЯ ЛЮСТРА NOBEL SLE201042-06",
    provider_id: 2,
    category: {
      id: 1,
      category_name: "Люстры",
    },
    price: "240.00",
    count: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    characteristics: [
      {
        characteristic: {
          id: 2,
          name: "RGB-подсветка",
        },
        value: "Присутствует",
      },
      {
        characteristic: {
          id: 7,
          name: "Вес",
        },
        value: "2",
      },
      {
        characteristic: {
          id: 4,
          name: "Свечение",
        },
        value: "Разное",
      },
    ],
  },
  {
    id: 4,
    name: "СВЕТИЛЬНИК СПОТ MIZAR A1311PL-4BK",
    provider_id: 1,
    category: {
      id: 3,
      category_name: "Светильник",
    },
    price: "76.00",
    count: 14,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    characteristics: [
      {
        characteristic: {
          id: 2,
          name: "RGB-подсветка",
        },
        value: "Присутствует",
      },
      {
        characteristic: {
          id: 7,
          name: "Вес",
        },
        value: "0.5",
      },
      {
        characteristic: {
          id: 3,
          name: "Энергопотребление",
        },
        value: "Слабое",
      },
      {
        characteristic: {
          id: 5,
          name: "Тип крепления",
        },
        value: "Стандарт",
      },
    ],
  },
  {
    id: 5,
    name: "BL-3124123",
    provider_id: 4,
    category: {
      id: 4,
      category_name: "Настольная лампа",
    },
    price: "266.50",
    count: 1,
    description: "фывфыафв",
    characteristics: [
      {
        characteristic: {
          id: 9,
          name: "Мощность",
        },
        value: "Цокольная",
      },
    ],
  },
];

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    async function getCartItems() {
      const cartResp = await axios.get(`${url}/cart`);
      setCartItems(cartResp.data);
    }
    getCartItems();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      onRemoveFromCart(obj);
    } else {
      axios.post(`${url}/cart`, obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };
  const onRemoveFromCart = (obj) => {
    axios.delete(`${url}/cart/${obj.id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(obj.id))
    );
  };
  //console.log(cartItems);

  return (
    <>
      <Header cartCount={cartItems.length} />
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToCart={(item) => onAddToCart(item)}
                onRemoveFromCart={(item) => onRemoveFromCart(item)}
                cartItems={cartItems}
                url={url}
              />
            }
          />
          <Route path="/catalog" element={<CatalogCategories />} />
          <Route
            path="/catalog/:category"
            element={
              <Catalog
                onAddToCart={(item) => onAddToCart(item)}
                onRemoveFromCart={(item) => onRemoveFromCart(item)}
                cartItems={cartItems}
                url={url}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAddToCart={(item) => onAddToCart(item)}
                onRemoveFromCart={(item) => onRemoveFromCart(item)}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/catalog/:category/:item/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
