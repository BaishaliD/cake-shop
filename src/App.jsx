import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.main";
import Product from "./pages/product/Product.main";
import ProductList from "./pages/productList/ProductList.main";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ProductStrip from "./components/ProductStrip";

function App() {
  return (
    <div className="App">
      <div className="fixed z-50">
        <NavBar />
        {/* <ProductStrip /> */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/faq" element={<div>FAQ Page </div>} />
      </Routes>
    </div>
  );
}

export default App;
