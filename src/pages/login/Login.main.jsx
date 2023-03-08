import { Divider, Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Google from "../../assets/icons/google.png";
import Facebook from "../../assets/icons/facebook.png";
import Logo from "../../assets/cake-shop-logo.png";
import "./LoginForm.css";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-screen h-screen bg-cake-pattern bg-center bg-repeat bg-[length:400px] flex justify-center items-center">
      <div className="bg-white w-[500px] xs:rounded-xl shadow-lg p-8 xs:p-16 flex-col justify-center items-center">
        <h1 className="text-primary2 text-center p-4 mb-8 rounded shadow-md">
          The Cake Bar and Co.
        </h1>
        <div className="mb-8 flex flex-row justify-center items-center">
          <div className="text-gray-500 mr-8 ppp">Login With</div>
          <img src={Google} className="h-8 w-8 mx-2 cursor-pointer" />
          <img src={Facebook} className="h-8 w-8 mx-2 cursor-pointer" />
        </div>
        <Divider>
          <span className="text-gray-400 font-normal text-sm">
            Or login with your e-mail
          </span>
        </Divider>

        <Form
          id="login-form"
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="E-mail address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-gray-500">Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <div className="text-center">
          <span className="text-gray-500">Don't have an account yet? </span>
          <a href="/register" className="text-accent1 hover:text-accent2">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
