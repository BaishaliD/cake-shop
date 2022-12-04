import { useState } from "react";
import "./App.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ProductStrip from "./components/ProductStrip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="fixed z-50">
        <NavBar />
        <ProductStrip />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/faq" element={<div>FAQ Page </div>} />
      </Routes>
    </div>
  );
}

export default App;
