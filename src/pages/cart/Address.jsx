import { useState } from "react";
import { Button, Radio, Modal } from "antd";
import AddAddress from "./AddAddress";

export default function Address({
  defaultAddress,
  addressBook,
  removeAddress,
  updateAddressBook,
}) {
  const [value, setValue] = useState(
    defaultAddress
      ? defaultAddress.id
      : addressBook && addressBook.length > 0
      ? addressBook[0].id
      : 0
  );
  const [addAdressModal, setAddAdressModal] = useState(false);

  const onChange = (e) => {
    console.log("Address changed! ", e.target.value);
    setValue(e.target.value);
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
          className="w-[300px] py-2 text-center bg-accent1 roboto text-secondary1 uppercase rounded cursor-pointer hover:shadow-md"
          onClick={() => {
            setAddAdressModal(true);
          }}
        >
          Add new address
        </div>
      </div>
      <Radio.Group
        onChange={onChange}
        value={value}
        className="flex flex-col items-center"
      >
        {defaultAddress && (
          <>
            <div className="text-lg mb-4 w-[500px] text-address-2">
              Default Address
            </div>
            <Radio value={defaultAddress.id}>
              <AddressCard
                data={defaultAddress}
                removeAddress={removeAddress}
                setAddAdressModal={setAddAdressModal}
                updateAddressBook={updateAddressBook}
              />
            </Radio>
          </>
        )}
        {addressBook && addressBook.length > 0 && (
          <>
            <div className="text-lg mt-12 mb-4 w-[500px] text-accent2">
              Other Addresses
            </div>
            {addressBook.map((address) => (
              <Radio key={address.id} value={address.id}>
                <AddressCard
                  data={address}
                  removeAddress={removeAddress}
                  setAddAdressModal={setAddAdressModal}
                  updateAddressBook={updateAddressBook}
                />
              </Radio>
            ))}
          </>
        )}
      </Radio.Group>
    </div>
  );
}

const AddressCard = ({
  data,
  removeAddress,
  setAddAdressModal,
  updateAddressBook,
}) => {
  const [editAddressModal, setEditAddressModal] = useState(false);
  return (
    <div
      className="w-[500px] my-2 p-4 ml-2 flex"
      style={{ border: "#0505050f solid 1px" }}
    >
      <div className="w-3/4">
        <div className="text-lg tracking-wide mb-4">{data.title}</div>
        <div className="text-lg font-bold">{data.name}</div>
        <div className="text-base mb-4">Phone: {data.phone}</div>
        <div className="text-sm">
          {data.address} {data.locality}
        </div>
        <div className="text-sm">
          {data.city} {data.state} - {data.pincode}
        </div>
      </div>
      <div className="w-1/4 flex flex-col items-end">
        <Button
          className="bg-transparent text-gray-500 mb-4 text-xs w-20"
          onClick={() => setEditAddressModal(true)}
        >
          Edit
        </Button>
        <Modal
          title={"Edit address"}
          centered
          footer={null}
          open={editAddressModal}
          onCancel={() => setEditAddressModal(false)}
        >
          <AddAddress
            edit={true}
            data={data}
            setShowModal={setEditAddressModal}
            updateAddressBook={updateAddressBook}
          />
        </Modal>
        <Button
          className="bg-transparent text-gray-500 text-xs w-20"
          onClick={() => removeAddress(data.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
