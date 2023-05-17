import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyOrders from "./MyOrders";
import AddressBook from "./AddressBook";
import MyReviews from "./MyReviews";
import MyProfile from "./MyProfile";

const tabs = [
  { id: "orders", label: "My Orders" },
  { id: "address", label: "Address Book" },
  { id: "reviews", label: "My Reviews" },
  { id: "profile", label: "My Profile" },
];
export default function Profile() {
  // const [selectedTab, setSelectedTab] = useState("profile");
  const navigate = useNavigate();
  let { selectedTab } = useParams();

  // useEffect(() => {}, [tab]);
  return (
    <div className="pt-24 bg-secondary2 flex flex-row min-h-[100vh]">
      <div
        className="w-1/3 p-4 pl-16"
        style={{ borderRight: "solid 1px #0505050f" }}
      >
        {tabs.map((item) => (
          <div
            key={item.id}
            className={`${
              selectedTab === item.id ? "bg-primary1" : "hover:shadow-lg"
            } p-4 text-lg my-4 cursor-pointer shadow-md`}
            onClick={() => {
              navigate(`/profile${item.id === "profile" ? "" : "/" + item.id}`);
              // setSelectedTab(item.id)
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="w-2/3 p-4">
        {selectedTab === "orders" ? (
          <div>
            <MyOrders />
          </div>
        ) : selectedTab === "address" ? (
          <div className="pl-16">
            <AddressBook />
          </div>
        ) : selectedTab === "reviews" ? (
          <div>
            <MyReviews />
          </div>
        ) : (
          <div>
            <MyProfile />
          </div>
        )}
      </div>
    </div>
  );
}
