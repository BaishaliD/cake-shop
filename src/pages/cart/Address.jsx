import { useState } from "react";
import { Button, Radio, Modal } from "antd";
import AddAddress from "../../components/AddAddress";
import AddressCard from "../../components/AddressCard";

export default function Address({
  addressBook,
  removeAddress,
  updateAddressBook,
}) {
  const [value, setValue] = useState(
    addressBook && addressBook.length > 0 ? addressBook[0].id : 0
  );
  const [addAdressModal, setAddAdressModal] = useState(false);

  const onChange = (e) => {
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
          className="w-[300px] py-2 text-center bg-accent1 roboto text-secondary1 uppercase rounded cursor-pointer hover:shadow-md m-auto"
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
        {addressBook && addressBook.length > 0 && (
          <>
            <div className="text-lg my-4 w-500 text-accent2">
              Saved Addresses
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
