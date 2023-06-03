import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import Step from "./Step";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useWindowSize } from "../../Hooks";
import { getCartData, removeFromCart } from "../../../firebase";
import CartProductCard from "./CartProductCard";
import CartSummary from "./CartSummary";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartState, updateCartState } = useContext(Context);
  const [width] = useWindowSize();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCartData().then((res) => {
      console.log("getCartData  response ", res);
      setCartItems(res);
    });
  }, []);

  const goToStep = (step) => {
    updateCartState(step);
    if (step === 0) {
      navigate("/cart");
    } else if (step === 1) {
      navigate("/address");
    } else if (step === 2) {
      navigate("/payment");
    }
  };

  const handleRemoveFromCart = (e, orderId) => {
    e.preventDefault();
    removeFromCart(orderId).then((res) => setCartItems(res));
  };

  return (
    <div className="pt-24 bg-secondary2 pb-16 min-h-screen">
      <div className="hidden sm:block w-full lg:w-2/3 m-auto p-8">
        <Step currentStep={cartState} goToStep={goToStep} />
      </div>
      <div className="flex sm:hidden justify-between px-4 pb-2">
        <div className="flex">
          <ShoppingCartOutlined className="text-accent1" />
          <div className="pl-2 text-accent1 uppercase tracking-widest">
            Cart
          </div>
        </div>
        <div className="text-gray-500 text-sm uppercase">
          Step {cartState + 1}/3
        </div>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-center">
          <div
            className="h-full w-full lg:w-2/3 flex flex-col px-2 sm:px-8"
            style={{ borderRight: width > 1023 ? "solid 1px #0505050f" : "" }}
          >
            {cartItems.map((item) => (
              <CartProductCard
                key={item.info.id}
                data={item}
                width={width}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
          <CartSummary />
        </div>
      ) : (
        <div className="w-full text-center pt-4 text-2xl px-16 text-gray-500">
          <div>You have not added any items to the Cart.</div>
          <a href="/products">
            <span className="underline text-accent1 cursor-pointer">
              Continue Shopping
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
