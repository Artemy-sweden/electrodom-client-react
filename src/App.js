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
import LoginPage from "./pages/Login";
import Account from "./pages/Account";

const url = "http://localhost:3001";
// const url = "https://63fe15b61626c165a0a7034c.mockapi.io";

function App() {
  const [cards, setCards] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [homeResp, categoriesResp, cartResp] = await Promise.all([
          axios.get(`${url}/cards?_sort=name`),
          axios.get(`${url}/categories`),
          axios.get(`${url}/cart?_sort=id`),
        ]);
        setIsLoading(false);
        setCards(homeResp.data);
        setCategories(categoriesResp.data);
        setCartItems(cartResp.data);
      } catch (error) {
        console.warn("errorrrr", error);
      }
    }
    fetchData();
  }, []);

  const onAddProduct = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      onRemoveProduct(obj);
    } else {
      axios.post(`${url}/cart`, obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };
  const onRemoveProduct = (obj) => {
    axios.delete(`${url}/cart/${obj.id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(obj.id))
    );
  };
  //sort
  //filter
  //search

  return (
    <>
      <Header cartCount={cartItems.length} />
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cards={cards}
                setCards={setCards}
                cartItems={cartItems}
                setCartItems={setCartItems}
                isLoading={isLoading}
                url={url}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <CatalogCategories
                categories={categories}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/catalog/:category"
            element={
              <Catalog
                url={url}
                cartItems={cartItems}
                setCartItems={setCartItems}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAddProduct={(item) => onAddProduct(item)}
                onRemoveProduct={(item) => onRemoveProduct(item)}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/catalog/:category/:item/:id" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/account"
            element={
              <Account
                cartItems={cartItems}
                onAddProduct={(item) => onAddProduct(item)}
                onRemoveProduct={(item) => onRemoveProduct(item)}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
