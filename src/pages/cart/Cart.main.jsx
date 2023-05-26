import { useState, useEffect } from "react";
import CartProductCard from "./CartProductCard";
import { fetchCartData, removeAddress } from "../../../firebase";
import { Button, Divider } from "antd";
import { TagOutlined, UserOutlined } from "@ant-design/icons";
import Step from "./Step";
import Address from "./Address";
import ComingSoon from "../../components/ComingSoon";
import { useWindowSize } from "../../Hooks";

export default function Cart() {
  const [width] = useWindowSize();
  const [cartItems, setCartItems] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [addressBook, setAddressBook] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCartData().then((res) => {
      setCartItems(res.cartItems);
      setAddressBook(res.addressBook);
    });
  }, []);

  const goToStep = (step) => {
    console.log("Go To Step :: ", step);
    if (step <= 2) {
      setCurrentStep(step);
    }
  };

  const removeAddress = (id) => {
    removeAddress(id).then((res) => {
      updateAddressBook(res);
    });
  };

  const updateAddressBook = (addressBook) => {
    setAddressBook(addressBook);
  };

  return (
    <div className="pt-24 bg-secondary2 pb-16">
      <div className="hidden sm:block w-full lg:w-2/3 m-auto p-8">
        <Step currentStep={currentStep} goToStep={goToStep} />
      </div>
      <div className="flex sm:hidden justify-between px-4 pb-2">
        <div className="flex">
          <UserOutlined className="text-accent1" />
          <div className="pl-2 text-accent1 uppercase tracking-widest">
            {currentStep === 0
              ? "Cart"
              : currentStep === 1
              ? "Address"
              : "Payment"}
          </div>
        </div>
        <div className="text-gray-500 text-sm uppercase">
          Step {currentStep + 1}/3
        </div>
      </div>
      {cartItems && cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-center">
          <div
            className="h-full w-full lg:w-2/3 flex flex-col px-2 sm:px-8"
            style={{ borderRight: width > 1023 ? "solid 1px #0505050f" : "" }}
          >
            {currentStep === 0 && (
              <>
                {cartItems.map((item) => (
                  <CartProductCard key={item.id} data={item} width={width} />
                ))}
              </>
            )}
            {currentStep === 1 && (
              <Address
                addressBook={addressBook}
                removeAddress={removeAddress}
                updateAddressBook={updateAddressBook}
              />
            )}
            {currentStep === 2 && (
              <div className="h-60 my-16">
                <ComingSoon text="Payment Section is coming soon!" />
              </div>
            )}
          </div>
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
            <div
              className="w-full mt-8 py-2 text-center bg-accent1 roboto text-secondary1 uppercase rounded cursor-pointer hover:shadow-md"
              onClick={() => goToStep(currentStep + 1)}
            >
              {currentStep === 0
                ? "Place Order"
                : currentStep === 1
                ? "Continue"
                : "Pay Now"}
            </div>
          </div>
        </div>
      ) : (
        <h1>No items in cart!</h1>
      )}
    </div>
  );
}
