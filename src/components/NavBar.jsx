import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuOutlined } from "@ant-design/icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useWindowSize } from "../Hooks";
import { Drawer } from "antd";

export default function NavBar({ setSideMenu }) {
  const [width, height] = useWindowSize();

  useEffect(() => {
    console.log("Window resized! ", width);
  }, [width]);

  return (
    <div className="w-screen h-16 bg-nav flex items-center justify-between text-accent1">
      {/* <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={() => {
          setSideMenu(false);
        }}
        open={sideMenu}
        bodyStyle={{ padding: 0 }}
        width="300px"
      >
        <SideMenuItem name="Home" link="/" />
        <SideMenuItem name="FAQ" link="/faq" />
        <SideMenuItem name="About Us" link="/aboutus" />
      </Drawer> */}
      {width > 768 ? (
        <>
          <div className="flex items-center">
            <NavItem name="Home" link="/" />
            <NavItem name="FAQ" link="/faq" />
            <NavItem name="About Us" link="/aboutus" />
          </div>
          <div className="acme text-3xl font-bold">The Cake Bar & Co.</div>
          <div className="flex items-center">
            <Icon icon={faSearch} />
            <Icon icon={faUser} />
            <Icon icon={faHeart} />
            <Icon icon={faCartShopping} link="/cart" />
          </div>
        </>
      ) : (
        <>
          <MenuOutlined
            className="px-4 text-2xl"
            onClick={() => setSideMenu((prev) => !prev)}
          />
          <div className="acme text-xl font-bold">The Cake Bar & Co.</div>
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

const Icon = ({ icon, link }) => {
  const navigate = useNavigate();
  return (
    <FontAwesomeIcon
      icon={icon}
      className="px-4 hover:opacity-75 cursor-pointer"
      onClick={() => {
        navigate(link);
      }}
    />
  );
};

const SideMenuItem = ({ name, link }) => {
  return (
    <div
      className="w-full text-gray-600 p-4"
      style={{ borderBottom: "1px solid lightGray" }}
    >
      {name}
    </div>
  );
};
