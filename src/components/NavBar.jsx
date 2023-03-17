import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuOutlined } from "@ant-design/icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useWindowSize } from "../Hooks";
import { Badge } from "antd";

export default function NavBar({ setSideMenu }) {
  const [width] = useWindowSize();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-16 bg-nav flex items-center justify-between text-accent1">
      {width > 768 ? (
        <>
          <div className="flex items-center">
            <NavItem name="Home" link="/" />
            <NavItem name="FAQ" link="/faq" />
            <NavItem name="About Us" link="/aboutUs" />
          </div>
          <div
            className="acme text-3xl font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            The Cake Bar & Co.
          </div>
          <div className="flex items-center pr-4">
            <Icon icon={faSearch} />
            <Icon icon={faUser} link="/profile" />
            <Icon icon={faHeart} link="/wishlist" />
            <Icon icon={faCartShopping} link="/cart" showBadge={true} />
          </div>
        </>
      ) : (
        <>
          <MenuOutlined
            className="px-4 text-2xl"
            onClick={() => setSideMenu((prev) => !prev)}
          />
          <div
            className="acme text-xl font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            The Cake Bar & Co.
          </div>
          <Icon icon={faCartShopping} link="/cart" />
        </>
      )}
    </div>
  );
}

const NavItem = ({ name, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className="roboto px-4 hover:opacity-75 cursor-pointer"
      onClick={() => {
        navigate(link);
      }}
    >
      {name}
    </div>
  );
};

const Icon = ({ icon, link, showBadge = false }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4">
      <Badge count={showBadge ? 5 : 0} offset={[5, -5]} color={"#815B5B"}>
        <FontAwesomeIcon
          icon={icon}
          className="hover:opacity-75 cursor-pointer"
          onClick={() => {
            navigate(link);
          }}
        />
      </Badge>
    </div>
  );
};
