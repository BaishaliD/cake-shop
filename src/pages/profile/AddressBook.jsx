import { useState, useEffect } from "react";
import { Modal, Form } from "antd";
import AddAddress from "../../components/AddAddress";
import AddressCard from "../../components/AddressCard";
import { fetchAddressBook, removeAddress } from "../../../firebase";

export default function AddressBook() {
  const [error, setError] = useState(null);
  const [addressBook, setAddressBook] = useState([]);
  const [addAdressModal, setAddAdressModal] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAddressBook()
      .then((addressBook) => {
        if (addressBook && addressBook.length > 0) {
          setError(null);
          setAddressBook(addressBook);
        } else {
          setError("NO_ADDRESS_ADDED");
        }
      })
      .catch((err) => {
        console.error("fetchAddressBook ", err);
        if (err === "NO_LOGGED_IN_USER") {
          setError(err);
        } else {
          setError("SOMETHING_WENT_WRONG");
        }
      });
  }, []);

  const updateAddressBook = (addressBook) => {
    setAddressBook(addressBook);
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
        onCancel={() => {
          () => {
            form.resetFields();
          };
          setAddAdressModal(false);
        }}
      >
        <AddAddress
          form={form}
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
          : error === "SOMETHING_WENT_WRONG"
          ? "Oops, seems like something is not right. We are working on fixing it."
          : null}
      </div>

      {addressBook && addressBook.length > 0 && (
        <>
          <div className="text-lg mb-4 w-500 text-accent2">Saved Addresses</div>
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
