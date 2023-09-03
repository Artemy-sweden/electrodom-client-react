import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./pages/Catalog";
import CatalogCategories from "./pages/CatalogCategories";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
