import { Link, useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import Quantity from "../../components/Quantity";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Veg from "../../assets/icons/veg.png";
import NonVeg from "../../assets/icons/nonveg.png";
import { useEffect, useState } from "react";
import { flavour } from "../../database/StaticData";
import { removeFromCart } from "../../../firebase";
import { add, format } from "date-fns";

export default function CartProductCard({
  data,
  width,
  handleRemoveFromCart,
  cartItems,
  setCartItems,
  updateCartSummary,
}) {
  const navigate = useNavigate();
  const { product, info } = data;
  const [qty, setQty] = useState(info.qty);

  const updateQuantityInLocal = (qty) => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.forEach((el) => {
        console.log("el.orderId ", el.orderId);
        console.log("info.orderId ", info.orderId);
        if (el.orderId === info.orderId) {
          console.log("Qty reset to ", qty);
          el.qty = qty;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    const updatedCartItems = cartItems.map((el) => {
      if (el.info.orderId === info.orderId) {
        el.info.qty = qty;
      }
      return el;
    });
    setCartItems(updatedCartItems);
    updateCartSummary(updatedCartItems);
  };

  return (
    <Link to={`/product/${info.id}`}>
      <div
        className="w-full min-h-52 flex flex-col md:flex-row md:items-end my-2 p-4 shadow-sm hover:shadow-md cursor-pointer relative"
        style={{ border: "#0505050f solid 1px" }}
      >
        <div className="w-full md:w-4/5 flex">
          <Image
            height="200px"
            src={
              Array.isArray(product.images) ? product.images[0] : product.images
            }
            className="cover w-1/4 min-w-[150px]"
          />
          <div className="pl-4 pr-2 sm:px-8 py-2 w-3/4">
            <div className="text-accent2 mb-2 flex flex-col items-start sm:items-center sm:flex-row text-lg font-bold">
              <span>{product.name}</span>
              <img
                src={product.eggless ? Veg : NonVeg}
                className="h-5 w-5 sm:ml-2"
              />
            </div>
            <div className="flex flex-col xs:flex-row text-accent2 mb-6 text-sm">
              {info.weight && (
                <span className="mr-4">Weight: {info.weight}</span>
              )}
              {flavour[info.flavour] && (
                <span>Flavour: {flavour[info.flavour]}</span>
              )}
            </div>
            {width > 480 && (
              <>
                <div className="flex w-full items-center my-2 text-sm">
                  <div className="w-1/4 sm:w-1/3">Price</div>
                  {console.log(
                    "info.price | info.discountedPrice ",
                    info.price,
                    info.discountedPrice
                  )}
                  <Price
                    price={info.price}
                    discountedPrice={
                      info.price - info.discountedPrice > 0
                        ? info.discountedPrice
                        : null
                    }
                    discount={info.discount}
                  />
                </div>
                <div className="flex w-full items-center my-2 text-sm">
                  <div className="w-1/4 sm:w-1/3">Quantity</div>
                  <Quantity
                    size="small"
                    qty={qty}
                    setQty={setQty}
                    updateQuantityInLocal={updateQuantityInLocal}
                  />
                </div>
                <div className="flex w-full items-center my-2 text-sm">
                  <div className="w-1/4 sm:w-1/3">Total</div>
                  <Price
                    price={info.price * qty}
                    discountedPrice={
                      info.price - info.discountedPrice > 0
                        ? info.discountedPrice * qty
                        : null
                    }
                    discount={info.discount}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {width <= 480 && (
          <div
            className="w-full flex items-start my-4 py-4"
            style={{
              borderTop: "solid 1px #0505050f",
              borderBottom: "solid 1px #0505050f",
            }}
          >
            <div className="w-1/3 flex flex-col items-center">
              <Price
                price={product.minPrice}
                discountedPrice={product.discountedPrice}
                discount={product.discount}
                col={true}
              />
            </div>
            <div className="w-1/3 flex justify-center">
              <Quantity
                size="small"
                qty={qty}
                setQty={setQty}
                updateQuantityInLocal={updateQuantityInLocal}
              />
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <Price
                price={product.minPrice * qty}
                discountedPrice={product.discountedPrice * qty}
                discount={product.discount}
                col={true}
                bold={true}
              />
            </div>
          </div>
        )}

        <CloseCircleOutlined
          className="absolute top-4 right-4 text-gray-400 text-2xl"
          onClick={(e) => handleRemoveFromCart(e, info.orderId)}
        />

        {/* <div className="bg-gray-200 h-full w-full md:w-1/5 flex flex-row md:flex-col justify-between items-end">
          <div className="text-sm flex flex-col justify-end">
            <div>
              <CheckCircleOutlined className="text-green-500" /> Delivery by
            </div>
            <h4>{info.deliveryDate}</h4>
          </div>
          <div className="text-sm text-gray-500 underline text-right">
            <div
              className="my-2"
              onClick={(e) => handleRemoveFromCart(e, info.orderId)}
            >
              Remove from Cart
            </div>
            <div className="my-2">Move to Wishlist</div>
          </div>
        </div> */}

        <div className="w-full md:w-1/5 flex flex-row md:flex-col justify-between items-end text-sm">
          <div>
            <CheckCircleOutlined className="text-green-500" /> Delivery by
          </div>
          <h4>
            {format(
              add(new Date(), {
                days: product.deliveryTimeInDays
                  ? product.deliveryTimeInDays
                  : 0,
              }),
              "dd/MM/yyyy"
            )}
          </h4>
        </div>
      </div>
    </Link>
  );
}

const Price = ({
  price,
  discountedPrice,
  discount,
  col = false,
  bold = false,
}) => {
  return (
    <div className={`flex ${col && "flex-col"} items-center`}>
      {discountedPrice > 0 ? (
        <>
          <span className={`text-accent2 mr-2 ${bold && "font-bold"}`}>
            Rs. {discountedPrice}
          </span>
          <span className="text-gray-500 line-through font-normal mr-2">
            Rs. {price}
          </span>
          {discount && (
            <div
              className="rounded px-2 text-green-600 text-xs mr-2"
              style={{ border: "solid 1px #16A34A" }}
            >
              {discount} OFF
            </div>
          )}
        </>
      ) : (
        <span className={`text-accent2 mr-2 ${bold && "font-bold"}`}>
          Rs. {price}
        </span>
      )}
    </div>
  );
};
