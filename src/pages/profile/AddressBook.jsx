import { useState, useEffect } from "react";
import { Modal } from "antd";
import AddAddress from "../../components/AddAddress";
import AddressCard from "../../components/AddressCard";
import { fetchAddressBook, removeAddress } from "../../../firebase";

export default function AddressBook() {
  const [error, setError] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [addressBook, setAddressBook] = useState([]);
  const [addAdressModal, setAddAdressModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAddressBook()
      .then((addressBook) => {
        if (addressBook && addressBook.length > 0) {
          const defaultAdd = addressBook.find(
            (address) => address.default === true
          );
          const otherAdd = addressBook.filter(
            (address) => address.default === false
          );
          setError(null);
          setDefaultAddress(defaultAdd ? defaultAdd : null);
          setAddressBook(otherAdd);
        } else {
          setError("NO_ADDRESS_ADDED");
        }
      })
      .catch((err) => {
        if (err === "NO_LOGGED_IN_USER") {
          setError(err);
        } else {
          setError("SOMETHING_WENT_WRONG");
        }
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

      <div className="w-full text-center pt-4 text-2xl px-16 text-gray-500">
        {error === "NO_ADDRESS_ADDED"
          ? "You have not added any address yet."
          : error === "NO_LOGGED_IN_USER"
          ? "Log In to view the saved addresses."
          : "Oops, seems like something is not right. We are working on fixing it."}
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
            All Addresses
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
