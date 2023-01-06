import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useRef } from "react";

export default function AddAddress() {
  const [focus, setFocus] = useState();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const required = [
    {
      required: true,
      message: "",
    },
  ];

  return (
    <div className="my-4 w-full">
      <Form
        name="address"
        wrapperCol={{
          offset: 0,
          span: "100%",
        }}
        initialValues={{
          remember: true,
          layout: "vertical",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h5 className="my-4 uppercase">Contact Details</h5>
        <Form.Item name="name" rules={required}>
          <InputComponent
            field={"name"}
            fieldName={"Name *"}
            focus={focus}
            setFocus={setFocus}
          />
        </Form.Item>

        <Form.Item name="phone" rules={required}>
          <InputComponent
            field={"phone"}
            fieldName={"Mobile No. *"}
            focus={focus}
            setFocus={setFocus}
          />
        </Form.Item>

        <h5 className="my-4 uppercase">Address</h5>

        <Form.Item name="address" rules={required}>
          <InputComponent
            field={"address"}
            fieldName={"Address *"}
            focus={focus}
            setFocus={setFocus}
          />
        </Form.Item>

        <div className="flex">
          <Form.Item name="locality" className="w-1/2 pr-1">
            <InputComponent
              field={"locality"}
              fieldName={"Locality/Town *"}
              focus={focus}
              setFocus={setFocus}
            />
          </Form.Item>
          <Form.Item name="pincode" rules={required} className="w-1/2 pl-1">
            <InputComponent
              field={"pincode"}
              fieldName={"Pincode *"}
              focus={focus}
              setFocus={setFocus}
            />
          </Form.Item>
        </div>

        <div className="flex">
          <Form.Item name="city" rules={required} className="w-1/2 pr-1">
            <InputComponent
              field={"city"}
              fieldName={"City/Disctrict *"}
              focus={focus}
              setFocus={setFocus}
            />
          </Form.Item>

          <Form.Item name="state" rules={required} className="w-1/2 pl-1">
            <InputComponent
              field={"state"}
              fieldName={"State *"}
              focus={focus}
              setFocus={setFocus}
            />
          </Form.Item>
        </div>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="mb-1"
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

const InputComponent = ({ field, fieldName, focus, setFocus }) => {
  return (
    <div className="relative">
      {focus === field && (
        <span className="absolute -top-2 bg-white px-2 left-2 z-10 text-gray-400 text-xs">
          {fieldName}
        </span>
      )}
      <Input
        placeholder={focus === field ? false : fieldName}
        className="placeholder:text-gray-400 placeholder:text-xs py-2"
        onFocus={(e) => setFocus(field)}
        onBlur={(e) => setFocus()}
      />
    </div>
  );
};
