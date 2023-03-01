import { Divider, message, Timeline, Collapse } from "antd";
import { useState, useEffect } from "react";
import { fetchOrders } from "../../../firebase";
import { CopyOutlined } from "@ant-design/icons";
import OrderItem from "./OrderItem";
const { Panel } = Collapse;

export default function MyOrders() {
  const [messageApi, contextHolder] = message.useMessage();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchOrders().then((res) => {
      setOrders(res);
    });
  }, []);
  return (
    <>
      {contextHolder}
      <div>{orders && orders.map((item) => <OrderCard order={item} />)}</div>
    </>
  );
}

const OrderCard = ({ order }) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <div
        className="w-full my-2 p-6 shadow-sm hover:shadow-md"
        style={{ border: "#0505050f solid 1px" }}
      >
        <Collapse
          expandIcon={({ isActive }) => (
            <div id="view-details">
              {isActive ? "HIDE DETAILS" : "VIEW DETAILS"}
            </div>
          )}
          expandIconPosition="end"
          collapsible="icon"
          ghost
        >
          <Panel
            header={
              <div className="flex flex-row justify-between">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(order.orderId);
                    messageApi.open({
                      type: "success",
                      content: "Order ID copied",
                      duration: 1,
                    });
                  }}
                >
                  Order Id : {order.orderId}
                  <CopyOutlined className="text-gray-400 ml-2" />
                </div>
              </div>
            }
            key="1"
          >
            <div className="text-sm flex">
              <div className="w-1/2">
                <div className="text-base mb-2">Billing Details</div>
                {order.items &&
                  order.items.length > 0 &&
                  order.items.map((item) => (
                    <div
                      className="pb-2 mb-2"
                      style={{ borderBottom: "#0505050f solid 1px" }}
                    >
                      <div className="flex justify-between font-bold">
                        {item.name} x {item.qty}
                      </div>
                      <div className="flex justify-between">
                        <span>Item Price</span>
                        <span>{item.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span> <span>{item.discount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount</span> <span>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>{order.deliveryCharge}</span>
                </div>
                <div className="flex justify-between font-bold text-base">
                  <span>Bill Total</span>
                  <span>{order.amount}</span>
                </div>
              </div>
              <div className="w-1/2 ml-16">
                <div className="text-base mb-2">Shipping Address</div>
                <div className="font-bold">{order.address.name}</div>
                <div className="font-bold">{order.address.phone}</div>
                <div>PIN Code - {order.address.pincode}</div>
                <div>
                  {order.address.address}, {order.address.locality}
                </div>
                <div>
                  {order.address.city}, {order.address.state}
                </div>
                <Divider />
                <div className="text-base mb-2">Payment</div>
                <div>Payment Mode :</div>
                <div>{order.paymentMode}</div>
                <div className="mt-2">Payment Status :</div>
                <div
                  className={`font-bold ${
                    order.paymentStatus === "Successful"
                      ? "text-green-600"
                      : order.paymentStatus === "Pending"
                      ? "text-orange-500"
                      : order.paymentStatus === "Failed"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  {order.paymentStatus}
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Divider />
        <div className="flex flex-row">
          <div className="w-1/2">
            {order.items &&
              order.items.length > 0 &&
              order.items.map((item) => <OrderItem data={item} />)}
          </div>
          <div className="pt-4 pl-4 w-1/2">
            <Timeline
              items={[
                {
                  children: (
                    <div>
                      <div>Order Placed</div>
                      {order.status.orderPlaced && (
                        <div className="text-sm">
                          {order.status.orderPlaced}
                        </div>
                      )}
                    </div>
                  ),
                  color: order.status.orderPlaced ? "green" : "gray",
                },
                {
                  children: (
                    <div>
                      <div>Payment Processed</div>
                      {order.status.paymentProcessed && (
                        <div className="text-sm">
                          {order.status.paymentProcessed}
                        </div>
                      )}
                    </div>
                  ),
                  color: order.status.paymentProcessed ? "green" : "gray",
                },
                {
                  children: (
                    <div>
                      <div>Out for Delivery</div>
                      {order.status.dispatched && (
                        <div className="text-sm">{order.status.dispatched}</div>
                      )}
                    </div>
                  ),
                  color: order.status.dispatched ? "green" : "gray",
                },
                {
                  children: (
                    <div>
                      <div>
                        {order.status.delivered
                          ? "Delivered"
                          : "Expected Delivery"}
                      </div>
                      <div className="text-sm">
                        {order.status.delivered
                          ? order.status.delivered
                          : order.status.eta}
                      </div>
                    </div>
                  ),
                  color: order.status.delivered ? "green" : "gray",
                },
              ]}
            />
          </div>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <div>Order Total : {order.amount}</div>
          <div>
            Payment Status :{" "}
            <span
              className={
                order.paymentStatus === "Successful"
                  ? "text-green-600"
                  : order.paymentStatus === "Pending"
                  ? "text-orange-500"
                  : order.paymentStatus === "Failed"
                  ? "text-red-500"
                  : "text-black"
              }
            >
              {order.paymentStatus}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
