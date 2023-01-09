import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuOutlined } from "@ant-design/icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useWindowSize } from "../Hooks";
import "./SideMenu.css";
import { Drawer, Collapse } from "antd";
const { Panel } = Collapse;
import { sideMenuList } from "../database/Menu";

export default function NavBar({}) {
  const navigate = useNavigate();
  const [width] = useWindowSize();
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="w-screen h-16 bg-nav flex items-center justify-between text-accent1">
      <Drawer
        placement="left"
        onClose={() => {
          setSideMenu(false);
        }}
        open={sideMenu}
        headerStyle={{ background: "#F5EBE0" }}
        bodyStyle={{ padding: 0, background: "#F5EBE0" }}
        width="300px"
        getContainer={false}
      >
        {sideMenuList.map((item) =>
          item.collapsible === false ? (
            <div
              className="w-full text-gray-600 p-4 hover:bg-primary1 cursor-pointer"
              style={{
                borderBottom:
                  item.noBorder === true ? "" : "1px solid lightGray",
              }}
              onClick={() => {
                setSideMenu(false);
                navigate(item.route);
              }}
            >
              {item.name}
            </div>
          ) : (
            <CollapseItem
              items={item.collapsibleItems}
              setSideMenu={setSideMenu}
            />
          )
        )}
      </Drawer>
      {width > 768 ? (
        <>
          <div className="flex items-center">
            <NavItem name="Home" link="/" />
            <NavItem name="FAQ" link="/faq" />
            <NavItem name="About Us" link="/aboutUs" />
          </div>
          <div className="acme text-3xl font-bold">The Cake Bar & Co.</div>
          <div className="flex items-center">
            <Icon icon={faSearch} />
            <Icon icon={faUser} link="/profile" />
            <Icon icon={faHeart} link="/wishlist" />
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

const CollapseItem = ({ items, setSideMenu }) => {
  const navigate = useNavigate();
  return (
    <Collapse>
      {items.map((item) => (
        <Panel
          header={item.name}
          key={item.route}
          className="bg-secondary2 hover:bg-primary1"
        >
          {item &&
            item.panel &&
            item.panel.length > 0 &&
            item.panel.map((i) => (
              <div
                className="w-full text-gray-600 p-2 hover:bg-primary1 cursor-pointer"
                onClick={() => {
                  setSideMenu(false);
                  navigate(item.route + i.route);
                }}
              >
                {i.name}
              </div>
            ))}
        </Panel>
      ))}
    </Collapse>
  );
};
