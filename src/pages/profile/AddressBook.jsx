import { useState, useEffect } from "react";
import { Modal } from "antd";
import AddAddress from "../../components/AddAddress";
import AddressCard from "../../components/AddressCard";
import { fetchCartData, removeAddress } from "../../../firebase";

export default function AddressBook() {
  const [defaultAddress, setDefaultAddress] = useState({});
  const [addressBook, setAddressBook] = useState([]);
  const [addAdressModal, setAddAdressModal] = useState(false);

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

  const updateAddressBook = (addressBook) => {
    const defaultAdd = addressBook.find((address) => address.default === true);
    const otherAdd = addressBook.filter((address) => address.default === false);
    setDefaultAddress(defaultAdd);
    setAddressBook(otherAdd);
  };

  const removeAddressHandler = (id) => {
    removeAddress(id).then((res) => {
      updateAddressBook(res);
    });
  };

  return (
    <div>
      <Modal
        title={"Add new address"}
        centered
        footer={null}
        open={addAdressModal}
        onCancel={() => setAddAdressModal(false)}
      >
        <AddAddress
          setShowModal={setAddAdressModal}
          updateAddressBook={updateAddressBook}
        />
      </Modal>
      <div className="w-full flex justify-end my-8">
        <div
          className="w-[300px] py-2 text-center bg-accent1 roboto text-secondary1 uppercase rounded cursor-pointer hover:shadow-md m-auto"
          onClick={() => {
            setAddAdressModal(true);
          }}
        >
          Add new address
        </div>
      </div>
      {defaultAddress && (
        <>
          <div className="text-lg mb-4 w-500 text-address-2">
            Default Address
          </div>
          <AddressCard
            data={defaultAddress}
            removeAddress={removeAddressHandler}
            setAddAdressModal={setAddAdressModal}
            updateAddressBook={updateAddressBook}
          />
        </>
      )}
      {addressBook && addressBook.length > 0 && (
        <>
          <div className="text-lg mt-12 mb-4 w-500 text-accent2">
            Other Addresses
          </div>
          {addressBook.map((address) => (
            <AddressCard
              data={address}
              removeAddress={removeAddressHandler}
              setAddAdressModal={setAddAdressModal}
              updateAddressBook={updateAddressBook}
            />
          ))}
        </>
      )}
    </div>
  );
}
