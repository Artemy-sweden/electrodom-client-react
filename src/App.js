import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./pages/Catalog";
import Purchases from "./pages/Purchases";
import CatalogCategories from "./pages/CatalogCategories";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<CatalogCategories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
