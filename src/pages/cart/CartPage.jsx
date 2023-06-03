import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import Step from "./Step";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useWindowSize } from "../../Hooks";
import { getCartData, removeFromCart } from "../../../firebase";
import CartProductCard from "./CartProductCard";
import CartSummary from "./CartSummary";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../components/PageLoader";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartState, updateCartState } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [width] = useWindowSize();
  const [cartItems, setCartItems] = useState([]);
  const [cartSummary, setCartSummary] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    getCartData()
      .then((res) => {
        res.forEach((item) => {
          const { price, discountedPrice, discount } =
            getPriceAndDiscountedPrice(item.product, item.info);
          item.info["price"] = price;
          item.info["discountedPrice"] = discountedPrice;
          item.info["discount"] = discount;
        });
        setCartItems(res);
        updateCartSummary(res);

        setLoading(false);
      })
      .catch((err) => {
        console.error("setCartItems ", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const updateCartSummary = (cartItems) => {
    console.log("updateCartSummary ", cartItems);
    const cartTotal = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.info.price * item.info.qty,
      0
    );
    const discountedTotal = cartItems.reduce(
      (totalPrice, item) =>
        totalPrice + item.info.discountedPrice * item.info.qty,
      0
    );
    console.log("cartTotal ", cartTotal);
    console.log("discountedTotal ", discountedTotal);
    setCartSummary({
      items: cartItems.length,
      total: cartTotal,
      discount: discountedTotal > 0 ? cartTotal - discountedTotal : 0,
    });
  };

  const getPriceAndDiscountedPrice = (product, info) => {
    console.log("getPriceAndDiscountedPrice ", product, info);
    let priceListObject;
    if (product.priceList && product.priceList.length > 0) {
      priceListObject = product.priceList.find(
        (el) =>
          (el.flavour ? el.flavour === info.flavour : true) &&
          (el.weight ? el.weight === info.weight : true)
      );
      console.log("priceListObject ", priceListObject);
    }
    if (priceListObject) {
      return {
        price: priceListObject.price,
        discountedPrice: priceListObject.discountedPrice
          ? priceListObject.discountedPrice
          : priceListObject.price,
        discount: priceListObject.discount,
      };
    } else {
      return {
        price: product.minPrice,
        discountedPrice: product.discountedPrice
          ? product.discountedPrice
          : product.minPrice,
        discount: product.discount,
      };
    }
  };

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
    removeFromCart(orderId)
      .then((res) => {
        let _cart = localStorage.getItem("cart");
        if (_cart) {
          let cart = JSON.parse(_cart);
          const ind = cart.findIndex((el) => {
            el.orderId === orderId;
          });
          cart.splice(ind, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
        console.log("setCartItems on handleRemoveFromCart ", res);
        res.forEach((item) => {
          const { price, discountedPrice, discount } =
            getPriceAndDiscountedPrice(item.product, item.info);
          item.info["price"] = price;
          item.info["discountedPrice"] = discountedPrice;
          item.info["discount"] = discount;
        });
        updateCartSummary(res);
        setCartItems(res);
      })
      .catch((err) => {
        console.error("removeFromCart ", err);
      });
  };

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    <div className="w-full text-center pt-4 text-2xl px-16 text-gray-500">
      <div>
        Oops, seems like something is not right. We are working on fixing it.
      </div>
      <a href="/products">
        <span className="underline text-accent1 cursor-pointer">
          Till then, explore our collection.
        </span>
      </a>
    </div>;
  }

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
                cartItems={cartItems}
                setCartItems={setCartItems}
                updateCartSummary={updateCartSummary}
              />
            ))}
          </div>
          <CartSummary cartSummary={cartSummary} />
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
