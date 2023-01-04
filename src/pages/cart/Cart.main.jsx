import { useState, useEffect } from "react";
import CartProductCard from "./CartProductCard";
import { fetchRandomList } from "../../../firebase";
import { Button, Divider } from "antd";
import { TagOutlined } from "@ant-design/icons";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchRandomList(3).then((res) => {
      setCartItems(res);
    });
  }, []);

  return (
    <div className="flex justify-center pt-24 bg-secondary2">
      <div
        className="h-full w-2/3 flex flex-col p-8"
        style={{ borderRight: "solid 1px lightGray" }}
      >
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => <CartProductCard data={item} />)
        ) : (
          <h1>No products in your cart!</h1>
        )}
      </div>
      <div className="h-full w-1/3 px-8 py-16 flex flex-col justify-start">
        <h4 className="uppercase">Coupons</h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <TagOutlined className="mr-4" />
            <div>Apply coupon</div>
          </div>
          <Button type="default" className="bg-secondary2 text-accent1">
            APPLY
          </Button>
        </div>
        <Divider />
        <h4 className="uppercase mb-4">Cart summary</h4>
        <div className="mb-4 text-accent1">3 items</div>
        <div className="w-full flex justify-between items-center my-2">
          <div>Total MRP</div>
          <div>Rs. 3,124</div>
        </div>
        <div className="w-full flex justify-between items-center my-2">
          <div>Discount on MRP</div>
          <div className="text-green-600">- Rs. 624</div>
        </div>
        <div className="w-full flex justify-between items-center my-2">
          <div>Coupon discount</div>
          <div className="text-accent1">Apply coupon</div>
        </div>
        <div className="w-full flex justify-between items-center my-2">
          <div>Delivery Charges</div>
          <div>Rs. 100</div>
        </div>
        <Divider />
        <div className="w-full flex justify-between items-center text-lg font-bold">
          <div>Total Amount</div>
          <div>Rs. 2,900</div>
        </div>
        <div className="w-full mt-8 py-2 text-center bg-accent1 roboto text-secondary1 uppercase rounded">
          Place Order
        </div>
      </div>
    </div>
  );
}
