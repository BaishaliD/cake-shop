import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.main";
import Product from "./pages/product/Product.main";
import ProductList from "./pages/productList/ProductList.main";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ProductStrip from "./components/ProductStrip";
import Footer from "./components/Footer";
import { addCupcakes } from "../firebase";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <div className="fixed" style={{ zIndex: "99999" }}>
        <NavBar />
        <ProductStrip />
        {/* <Button
          onClick={() => {
            console.log("Add cupcakes function called!");
            addCupcakes();
          }}
        >
          ADD CUPCAKES
        </Button> */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/faq" element={<div>FAQ Page </div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
