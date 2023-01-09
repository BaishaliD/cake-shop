import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.main";
import Product from "./pages/product/Product.main";
import ProductList from "./pages/productList/ProductList.main";
import Cart from "./pages/cart/Cart.main";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ProductStrip from "./components/ProductStrip";
import Footer from "./components/Footer";
import { addCupcakes } from "../firebase";
import { Button, Drawer } from "antd";
import { useWindowSize } from "./Hooks";

function App() {
  const [width] = useWindowSize();
  return (
    <div className="App">
      <div className="fixed min-h-screen" style={{ zIndex: "99999" }}>
        <NavBar />
        {width > 768 && <ProductStrip />}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<div>FAQ Page </div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
