import React from "react";
import {
  TransactionOutlined,
  SolutionOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";

export default function Step({ currentStep, goToStep }) {
  return (
    <Steps
      current={currentStep}
      onChange={(current) => goToStep(current)}
      items={[
        {
          title: (
            <div className="text-accent1 uppercase tracking-widest">Cart</div>
          ),
          status: currentStep === 0 ? "process" : "finish",
          icon: (
            <ShoppingCartOutlined
              className={currentStep >= 0 ? "text-accent1" : "text-gray-500"}
            />
          ),
        },
        {
          title: (
            <div
              className={`${
                currentStep >= 1 ? "text-accent1" : "text-gray-500"
              } uppercase tracking-widest`}
            >
              Address
            </div>
          ),
          status:
            currentStep === 0
              ? "wait"
              : currentStep === 1
              ? "process"
              : "finish",
          icon: (
            <SolutionOutlined
              className={currentStep >= 1 ? "text-accent1" : "text-gray-500"}
            />
          ),
        },
        {
          title: (
            <div
              className={`${
                currentStep === 2 ? "text-accent1" : "text-gray-500"
              } uppercase tracking-widest`}
            >
              Payment
            </div>
          ),
          status: currentStep === 2 ? "finish" : "wait",
          icon: (
            <TransactionOutlined
              className={currentStep === 2 ? "text-accent1" : "text-gray-500"}
            />
          ),
        },
      ]}
    />
  );
}
