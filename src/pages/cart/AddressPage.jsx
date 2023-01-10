import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import Step from "./Step";
import { SolutionOutlined } from "@ant-design/icons";
import { useWindowSize } from "../../Hooks";
import { fetchCartData, removeAddress } from "../../../firebase";
import Address from "./Address";
import CartSummary from "./CartSummary";
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const navigate = useNavigate();
  const { cartState, updateCartState } = useContext(Context);
  const [width] = useWindowSize();
  const [defaultAddress, setDefaultAddress] = useState({});
  const [addressBook, setAddressBook] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCartData().then((res) => {
      const defaultAdd = res.addressBook.find(
        (address) => address.default === true
      );
      const otherAdd = res.addressBook.filter(
        (address) => address.default === false
      );
      setDefaultAddress(defaultAdd);
      setAddressBook(otherAdd);
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

  const removeAddressHandler = (id) => {
    removeAddress(id).then((res) => {
      updateAddressBook(res);
    });
  };

  const updateAddressBook = (addressBook) => {
    const defaultAdd = addressBook.find((address) => address.default === true);
    const otherAdd = addressBook.filter((address) => address.default === false);
    setDefaultAddress(defaultAdd);
    setAddressBook(otherAdd);
  };

  return (
    <div className="pt-24 bg-secondary2 pb-16">
      <div className="hidden sm:block w-full lg:w-2/3 m-auto p-8">
        <Step currentStep={cartState} goToStep={goToStep} />
      </div>
      <div className="flex sm:hidden justify-between px-4 pb-2">
        <div className="flex">
          <SolutionOutlined className="text-accent1" />
          <div className="pl-2 text-accent1 uppercase tracking-widest">
            Address
          </div>
        </div>
        <div className="text-gray-500 text-sm uppercase">
          Step {cartState + 1}/3
        </div>
      </div>
      {defaultAddress || (addressBook && addressBook.length > 0) ? (
        <div className="flex flex-col lg:flex-row justify-center">
          <div
            className="h-full w-full lg:w-2/3 flex flex-col px-2 sm:px-8"
            style={{ borderRight: width > 1023 ? "solid 1px #0505050f" : "" }}
          >
            <Address
              defaultAddress={defaultAddress}
              addressBook={addressBook}
              removeAddress={removeAddressHandler}
              updateAddressBook={updateAddressBook}
            />
          </div>
          <CartSummary />
        </div>
      ) : (
        <h1>No address added!</h1>
      )}
    </div>
  );
}
