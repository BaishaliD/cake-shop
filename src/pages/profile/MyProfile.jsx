import { Divider, Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

export default function MyProfile() {
  const [submitting, setSubmitting] = useState(false);
  const [disableForm, setDisableForm] = useState(true);
  const updateProfile = () => {
    console.log("Update profile!");
    setSubmitting(true);
    setTimeout(() => {
      setDisableForm(true);
      setSubmitting(false);
    }, 2000);
  };
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-fit-content">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={disableForm}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        size="large"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          label="Name"
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          label="Email"
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>
        <Form.Item
          name="mobile"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          label="Mobile No."
        >
          <Input placeholder="Enter your mobile number" />
        </Form.Item>
        <Form.Item
          name="birthday"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          label="Birthday"
        >
          <Input placeholder="Enter your birthday" />
        </Form.Item>
      </Form>
      <Button
        type="primary"
        htmlType="reset"
        className="login-form-button"
        disabled={submitting}
        onClick={() => {
          disableForm ? setDisableForm((prev) => !prev) : updateProfile();
        }}
      >
        {disableForm ? "Edit Profile" : "Submit"}
      </Button>
    </div>
  );
}
