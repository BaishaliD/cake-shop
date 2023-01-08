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

function App() {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className="App">
      <div className="fixed" style={{ zIndex: "99999" }}>
        <NavBar setSideMenu={setSideMenu} />
        <Drawer
          title="Basic Drawer"
          placement="left"
          onClose={() => {
            setSideMenu(false);
          }}
          open={sideMenu}
          bodyStyle={{ padding: 0 }}
          width="300px"
        >
          <SideMenuItem name="Home" link="/" />
          <SideMenuItem name="FAQ" link="/faq" />
          <SideMenuItem name="About Us" link="/aboutus" />
        </Drawer>
        <ProductStrip />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
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

const SideMenuItem = ({ name, link }) => {
  return (
    <div
      className="w-full text-gray-600 p-4"
      style={{ borderBottom: "1px solid lightGray" }}
    >
      {name}
    </div>
  );
};
