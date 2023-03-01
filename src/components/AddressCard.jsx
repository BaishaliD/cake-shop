import { useState } from "react";
import { Button, Modal } from "antd";
import AddAddress from "./AddAddress";

export default function AddressCard({
  data,
  removeAddress,
  setAddAdressModal,
  updateAddressBook,
}) {
  const [editAddressModal, setEditAddressModal] = useState(false);
  return (
    <div
      className="w-500 my-2 p-4 xs:ml-2 flex"
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
}
