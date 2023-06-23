import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Quantity({ qty, setQty, size, updateQuantityInLocal }) {
  return (
    <div
      className="flex border max-w-fit select-none"
      style={{ borderColor: "#251a1a" }}
    >
      <div
        className={`${size === "small" ? "p-1 text-sm" : "p-2"}`}
        onClick={(e) => {
          e.preventDefault();
          if (qty > 1) {
            setQty((qty) => {
              if (updateQuantityInLocal) {
                updateQuantityInLocal(qty - 1);
              }
              return qty - 1;
            });
          }
        }}
      >
        <MinusOutlined />
      </div>
      <div
        className={`border-x flex-grow ${
          size === "small" ? "px-4 py-1 text-sm" : "px-8 py-2"
        }`}
        style={{ borderColor: "#251a1a" }}
      >
        {qty}
      </div>
      <div
        className={`${size === "small" ? "p-1 text-sm" : "p-2"}`}
        onClick={(e) => {
          e.preventDefault();
          setQty((qty) => {
            if (updateQuantityInLocal) {
              updateQuantityInLocal(qty + 1);
            }
            return qty + 1;
          });
        }}
      >
        <PlusOutlined />
      </div>
    </div>
  );
}
