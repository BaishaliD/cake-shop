import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ContextProvider } from "./Context";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#DBA39A",
            colorPrimaryHover: "#815B5B",
            fontFamily: "Roboto, sans-serif",
            fontSize: 16,
          },
        }}
      >
        <ContextProvider>
          <App />
        </ContextProvider>
      </ConfigProvider>
    </Router>
  </React.StrictMode>
);
