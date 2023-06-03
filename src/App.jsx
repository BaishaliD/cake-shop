import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.main";
import Product from "./pages/product/Product.main";
import ProductList from "./pages/productList/ProductList.main";
import Wishlist from "./pages/wishlist/Wishlist.main";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar";
import ProductStrip from "./components/ProductStrip";
import Footer from "./components/Footer";
import { useWindowSize } from "./Hooks";
import SideMenu from "./components/SideMenu";
import CartPage from "./pages/cart/CartPage";
import AddressPage from "./pages/cart/AddressPage";
import PaymentPage from "./pages/cart/PaymentPage";
import Login from "./pages/login/Login.main";
import Profile from "./pages/profile/Profile.main";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Occasion from "./pages/occasion/Occasion.main";
import Type from "./pages/type/Type.main";
import Category from "./pages/category/Category.main";
import Flavour from "./pages/flavour/Flavour.main";

function App() {
  const [width] = useWindowSize();
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="App">
      {location.pathname !== "/login" && (
        <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
      )}
      {location.pathname !== "/login" && (
        <div className="fixed" style={{ zIndex: "100" }}>
          <NavBar setSideMenu={setSideMenu} />
          {width > 768 && <ProductStrip />}
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/occasion/:occasion" element={<Occasion />} />
        <Route path="/type/:type" element={<Type />} />
        <Route path="/category/:cat" element={<Category />} />
        <Route path="/flavour/:flavour" element={<Flavour />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:selectedTab" element={<Profile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
