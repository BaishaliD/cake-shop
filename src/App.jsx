import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.main";
import Product from "./pages/product/Product.main";
import ProductList from "./pages/productList/ProductList.main";
import Cart from "./pages/cart/Cart.main";
import Wishlist from "./pages/wishlist/Wishlist.main";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ProductStrip from "./components/ProductStrip";
import Footer from "./components/Footer";
import { addCupcakes } from "../firebase";
import { useWindowSize } from "./Hooks";
import SideMenu from "./components/SideMenu";

function App() {
  const [width] = useWindowSize();
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="App h-content">
      <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <div className="fixed" style={{ zIndex: "99999" }}>
        <NavBar setSideMenu={setSideMenu} />
        {width > 768 && <ProductStrip />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/faq" element={<div>FAQ Page </div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
