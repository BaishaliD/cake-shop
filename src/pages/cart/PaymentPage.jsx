import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import Step from "./Step";
import { TransactionOutlined } from "@ant-design/icons";
import { useWindowSize } from "../../Hooks";
import { getCartData } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import ComingSoon from "../../components/ComingSoon";
import CartSummary from "./CartSummary";
import PageLoader from "../../components/PageLoader";
import Error from "./Error";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartState, updateCartState } = useContext(Context);
  const [width] = useWindowSize();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    getCartData()
      .then((res) => {
        setError(false);
        setCartItems(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
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

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="pt-24 bg-secondary2 pb-16">
      <div className="hidden sm:block w-full lg:w-2/3 m-auto p-8">
        <Step currentStep={cartState} goToStep={goToStep} />
      </div>
      <div className="flex sm:hidden justify-between px-4 pb-2">
        <div className="flex">
          <TransactionOutlined className="text-accent1" />
          <div className="pl-2 text-accent1 uppercase tracking-widest">
            Payment
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
            <div className="h-60 my-16">
              <ComingSoon text="Payment Section is coming soon!" />
            </div>
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
