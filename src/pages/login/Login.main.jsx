import { Divider, Button, Checkbox, Form, Input } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Google from "../../assets/icons/google.png";
import Facebook from "../../assets/icons/facebook.png";
import Logo from "../../assets/cake-shop-logo.png";
import "./LoginForm.css";
import {
  handleSignUpWithEmailAndPassword,
  handleSignInWithEmailAndPassword,
  handleSignInWithGooglePopup,
  signInWithFacebookPopup,
} from "../../../firebaseAuth";

export default function Login() {
  const [isSignUp, setisSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage("");
  }, [isSignUp]);

  const onFinish = (values) => {
    if (isSignUp) {
      //register user
      handleSignUpWithEmailAndPassword(
        values.name,
        values.email,
        values.password
      )
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          console.error("handleSignUpWithEmailAndPassword ", error);
          setErrorMessage(error);
        });
    } else {
      //login user
      handleSignInWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          console.error("handleSignInWithEmailAndPassword ", error);
          setErrorMessage(error);
        });
    }
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="w-screen h-screen bg-cake-pattern bg-center bg-repeat bg-[length:400px] flex justify-center items-center">
      <div className="bg-white w-[500px] xs:rounded-xl shadow-lg p-8 xs:p-16 flex-col justify-center items-center">
        <h1 className="text-primary2 text-center p-4 mb-8 rounded shadow-md">
          The Cake Bar and Co.
        </h1>
        <div className="mb-8 flex flex-row justify-center items-center">
          <div className="text-gray-500 mr-8 ppp">
            {isSignUp ? "Register" : "Login"} With
          </div>
          <img
            src={Google}
            className="h-8 w-8 mx-2 cursor-pointer"
            onClick={() =>
              handleSignInWithGooglePopup()
                .then((res) => {
                  navigate("/");
                })
                .catch((error) => {
                  console.error("handleSignInWithGooglePopup ", error);
                  setErrorMessage(error);
                })
            }
          />
          {/* <img
            src={Facebook}
            className="h-8 w-8 mx-2 cursor-pointer"
            onClick={() =>
              signInWithFacebookPopup()
                .then((res) => {
                  navigate("/");
                })
                .catch((error) => setErrorMessage(error))
            }
          /> */}
        </div>
        <Divider>
          <span className="text-gray-400 font-normal text-sm">
            Or {isSignUp ? "register" : "login"} with your e-mail
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
          {isSignUp && (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              autoComplete="on"
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Name"
              />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            autoComplete="on"
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
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
            autoComplete="on"
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-gray-500">Remember me</Checkbox>
            </Form.Item>

            {!isSignUp && (
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isSignUp ? "Register" : "Log in"}
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <div className="text-center">
          <span className="text-gray-500">
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account yet? "}
          </span>
          <span
            className="text-accent1 hover:text-accent2 cursor-pointer"
            onClick={() => setisSignUp((prev) => !prev)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
}
