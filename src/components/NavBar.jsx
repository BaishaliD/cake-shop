import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import {
  faSearch,
  faCartShopping,
  faU,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useWindowSize } from "../Hooks";
import { message } from "antd";
import { Badge, Button, Avatar, Dropdown } from "antd";
import { logOut } from "../../firebaseAuth";

export default function NavBar({ setSideMenu }) {
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    isLoggedIn().then((res) => {
      console.log("is logged in? ", res);
      setLoggedIn(res);
    });
  }, []);

  const isLoggedIn = async () => {
    let _user = localStorage.getItem("user");
    if (_user) {
      let user = await JSON.parse(_user);
      if (user) {
        setUsername(user.displayName);
      }
      return true;
    }
    return false;
  };

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
            <ProfileDropdown username={username} loggedIn={loggedIn} />
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

const ProfileDropdown = ({ username, loggedIn }) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const items = [
    {
      label: (
        <div
          className="w-[200px] py-2"
          style={{ borderBottom: "solid 1px #0505050f" }}
        >
          {contextHolder}
          <div className="flex items-center mb-2">
            <Avatar size="large" icon={<UserOutlined />} />
            <div>
              <span className="pl-4 text-sm">Welcome,</span>
              <h4 className="pl-4">{username ? username : "Guest"}</h4>
            </div>
          </div>

          <Button
            className="bg-accent1 text-secondary1 hover:bg-white"
            onClick={() => {
              if (loggedIn) {
                logOut()
                  .then(() => {
                    localStorage.removeItem("user");
                    message.success("You are signed out", 1, () => {
                      window.location.reload();
                    });
                  })
                  .catch(() => {
                    messageApi.error(
                      "Sorry, your Sign Out request could not be completed.",
                      1
                    );
                  });
              } else {
                navigate("/login");
              }
            }}
          >
            {loggedIn ? "Sign Out" : "Login/Register"}
          </Button>
        </div>
      ),
      key: "login",
    },
    {
      label: (
        <a href="/profile/orders">
          <div className="py-2" style={{ borderBottom: "solid 1px #0505050f" }}>
            My Orders
          </div>
        </a>
      ),
      key: "orders",
    },
    {
      label: (
        <a href="/profile/address">
          <div className="py-2" style={{ borderBottom: "solid 1px #0505050f" }}>
            My Addresses
          </div>
        </a>
      ),
      key: "address",
    },
    {
      label: (
        <a href="/profile/reviews">
          <div className="py-2" style={{ borderBottom: "solid 1px #0505050f" }}>
            My Reviews
          </div>
        </a>
      ),
      key: "reviews",
    },
    {
      label: (
        <a href="/profile">
          <div className="py-2" style={{ borderBottom: "solid 1px #0505050f" }}>
            My Profile
          </div>
        </a>
      ),
      key: "profile",
    },
  ];

  return (
    <div className="px-4">
      <Dropdown
        menu={{
          items,
        }}
        overlayStyle={{ zIndex: "999999" }}
        placement="bottomRight"
      >
        <FontAwesomeIcon
          icon={faUser}
          className="hover:opacity-75 cursor-pointer"
        />
      </Dropdown>
    </div>
  );
};
