import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const list = [
  {
    label: "All Products",
    route: "/products",
  },
  {
    label: "Flavours",
    route: "/flavour",
    dropdown: [
      { label: "Chocolate Cakes", key: "/chocolate" },
      { label: "Vanilla Cakes", key: "/vanilla" },
      { label: "Strawberry Cakes", key: "/strawberry" },
    ],
  },
  {
    label: "Occasions",
    route: "/occasion",
    dropdown: [
      { label: "Wedding Cakes ", key: "/wedding" },
      { label: "Anniversary Cakes", key: "/anniversary" },
      { label: "Christmas Cakes", key: "/christmas" },
    ],
  },
  {
    label: "Types",
    route: "/type",
    dropdown: [
      { label: "Fondant Cakes", key: "/fondant" },
      { label: "Drip Cakes", key: "/drip" },
      { label: "Tea Cakes", key: "/tea" },
      { label: "Sponge Cakes", key: "/fond" },
      { label: "Marble Cakes", key: "/marble" },
    ],
  },
  {
    label: "Cupcakes",
    route: "/cupcakes",
  },
  {
    label: "Jar Cakes",
    route: "/jarcakes",
  },
  {
    label: "Macarons",
    route: "/macaron",
  },
];

export default function ProductStrip() {
  return (
    <div className="h-8 w-screen text-secondary1 bg-primary2 flex items-center">
      {list.map((item) => (
        <Item
          key={item.label}
          label={item.label}
          items={item.dropdown}
          route={item.route}
        />
      ))}
    </div>
  );
}

const Item = ({ label, route, items }) => {
  const onClick = ({ key }) => {
    console.log("Click on item :: ", route, key);
  };
  return (
    <div className="roboto px-4 flex items-center">
      {items && items.length > 0 ? (
        <Dropdown
          menu={{
            items,
            onClick,
          }}
          overlayStyle={{ zIndex: "999999" }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {label}
              <DownOutlined className="text-xs" />
            </Space>
          </a>
        </Dropdown>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
};
