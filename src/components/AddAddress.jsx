import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { updateAddress, addAddress } from "../../firebase";

export default function AddAddress({
  edit = false,
  data,
  setShowModal,
  updateAddressBook,
  form,
}) {
  // const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", edit, values);
    values.id = data && data.id ? data.id : `add_${Date.now()}`;
    if (edit === true) {
      updateAddress(values).then((res) => {
        console.log("Address updated!");
        updateAddressBook(res);
      });
    } else {
      addAddress(values).then((res) => {
        console.log("New address added!", res);
        updateAddressBook(res);
      });
    }
    setShowModal(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const onReset = () => {
  //   form.resetFields();
  // };

  const required = [
    {
      required: true,
      message: <span className="text-xs">This is a mandatory field.</span>,
    },
  ];

  return (
    <div className="my-4 w-full">
      <Form
        form={form}
        name="address"
        wrapperCol={{
          offset: 0,
          span: "100%",
        }}
        initialValues={
          edit
            ? {
                layout: "vertical",
                ...data,
              }
            : {
                layout: "vertical",
                address: "",
                city: "",
                id: "",
                locality: "",
                name: "",
                phone: "",
                pincode: "",
                state: "",
              }
        }
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h5 className="my-4 uppercase">Contact Details</h5>
        <Form.Item name="name" rules={required}>
          <Input
            className="placeholder:text-gray-400 py-2"
            placeholder={"Name *"}
          />
        </Form.Item>

        <Form.Item name="phone" rules={required}>
          <Input
            className="placeholder:text-gray-400 py-2"
            placeholder={"Phone *"}
          />
        </Form.Item>

        <h5 className="my-4 uppercase">Address</h5>

        <Form.Item name="address" rules={required}>
          <Input
            className="placeholder:text-gray-400 py-2"
            placeholder={"Address *"}
          />
        </Form.Item>

        <div className="flex">
          <Form.Item name="locality" className="w-1/2 pr-1">
            <Input
              className="placeholder:text-gray-400 py-2"
              placeholder={"Locality"}
            />
          </Form.Item>
          <Form.Item name="pincode" rules={required} className="w-1/2 pl-1">
            <Input
              className="placeholder:text-gray-400 py-2"
              placeholder={"Pincode *"}
            />
          </Form.Item>
        </div>

        <div className="flex">
          <Form.Item name="city" rules={required} className="w-1/2 pr-1">
            <Input
              className="placeholder:text-gray-400 py-2"
              placeholder={"City *"}
            />
          </Form.Item>

          <Form.Item name="state" rules={required} className="w-1/2 pl-1">
            <Input
              className="placeholder:text-gray-400 py-2"
              placeholder={"State *"}
            />
          </Form.Item>
        </div>

        {/* <Form.Item name="default" valuePropName="checked">
          <Checkbox>Make this my default address</Checkbox>
        </Form.Item> */}

        <div className="w-full flex justify-center">
          <Form.Item>
            <Button type="primary" htmlType="submit" className="uppercase">
              {edit ? "Update Address" : "Add Address"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
