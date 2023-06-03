import { useContext, useState } from "react";
import { Context } from "../../Context";
import { TagOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";

export default function CartSummary({ cartSummary }) {
  const navigate = useNavigate();
  const { cartState, updateCartState } = useContext(Context);
  const [deliveryCharge, setDeliveryCharge] = useState(100);

  return (
    <div className="h-full w-full lg:w-1/3 px-8 py-16 flex flex-col justify-start">
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
      <div className="mb-4 text-accent1">{cartSummary.items} items</div>
      <div className="w-full flex justify-between items-center my-2">
        <div>Total MRP</div>
        <div>Rs. {cartSummary.total}</div>
      </div>
      <div className="w-full flex justify-between items-center my-2">
        <div>Discount on MRP</div>
        <div className="text-green-600">- Rs. {cartSummary.discount}</div>
      </div>
      <div className="w-full flex justify-between items-center my-2">
        <div>Coupon discount</div>
        <div className="text-accent1">Apply coupon</div>
      </div>
      <div className="w-full flex justify-between items-center my-2">
        <div>Delivery Charges</div>
        <div>Rs. {deliveryCharge}</div>
      </div>
      <Divider />
      <div className="w-full flex justify-between items-center text-lg font-bold">
        <div>Total Amount</div>
        <div>
          Rs.{cartSummary.total - cartSummary.discount + deliveryCharge}
        </div>
      </div>
      <div
        className="w-full mt-8 py-2 text-center bg-accent1 roboto text-secondary1 uppercase rounded cursor-pointer hover:shadow-md"
        onClick={() => {
          if (cartState === 0) {
            updateCartState(1);
            navigate("/address");
          } else if (cartState === 1) {
            updateCartState(2);
            navigate("/payment");
          }
        }}
      >
        {cartState === 0
          ? "Place Order"
          : cartState === 1
          ? "Continue"
          : "Pay Now"}
      </div>
    </div>
  );
}
